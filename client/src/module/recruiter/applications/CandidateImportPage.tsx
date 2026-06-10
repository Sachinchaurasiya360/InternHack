
i
m
p
o
r
t
 
{
 
u
s
e
S
t
a
t
e
,
 
u
s
e
R
e
f
,
 
u
s
e
C
a
l
l
b
a
c
k
 
}
 
f
r
o
m
 
"
r
e
a
c
t
"
;


i
m
p
o
r
t
 
{
 
L
i
n
k
,
 
u
s
e
P
a
r
a
m
s
 
}
 
f
r
o
m
 
"
r
e
a
c
t
-
r
o
u
t
e
r
"
;


i
m
p
o
r
t
 
{
 
A
r
r
o
w
L
e
f
t
,
 
U
p
l
o
a
d
,
 
A
l
e
r
t
C
i
r
c
l
e
,
 
C
h
e
c
k
C
i
r
c
l
e
2
,
 
X
C
i
r
c
l
e
,
 
D
o
w
n
l
o
a
d
,
 
L
o
a
d
e
r
2
 
}
 
f
r
o
m
 
"
l
u
c
i
d
e
-
r
e
a
c
t
"
;


i
m
p
o
r
t
 
{
 
m
o
t
i
o
n
,
 
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
 
}
 
f
r
o
m
 
"
f
r
a
m
e
r
-
m
o
t
i
o
n
"
;


i
m
p
o
r
t
 
{
 
S
E
O
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
c
o
m
p
o
n
e
n
t
s
/
S
E
O
"
;


i
m
p
o
r
t
 
a
p
i
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
l
i
b
/
a
x
i
o
s
"
;




/
/
 
-
-
-
 
C
S
V
 
F
i
e
l
d
 
R
e
q
u
i
r
e
m
e
n
t
s
 
-
-
-


/
/
 
R
e
q
u
i
r
e
d
:
 
e
m
a
i
l
,
 
n
a
m
e


/
/
 
O
p
t
i
o
n
a
l
:
 
p
h
o
n
e
,
 
s
k
i
l
l
s
,
 
l
i
n
k
e
d
i
n
U
r
l
,
 
p
o
r
t
f
o
l
i
o
U
r
l
,
 
c
o
v
e
r
L
e
t
t
e
r




c
o
n
s
t
 
R
E
Q
U
I
R
E
D
_
H
E
A
D
E
R
S
 
=
 
[
"
e
m
a
i
l
"
,
 
"
n
a
m
e
"
]
 
a
s
 
c
o
n
s
t
;




i
n
t
e
r
f
a
c
e
 
C
s
v
R
o
w
 
{


 
 
e
m
a
i
l
:
 
s
t
r
i
n
g
;


 
 
n
a
m
e
:
 
s
t
r
i
n
g
;


 
 
p
h
o
n
e
?
:
 
s
t
r
i
n
g
;


 
 
s
k
i
l
l
s
?
:
 
s
t
r
i
n
g
;


 
 
l
i
n
k
e
d
i
n
U
r
l
?
:
 
s
t
r
i
n
g
;


 
 
p
o
r
t
f
o
l
i
o
U
r
l
?
:
 
s
t
r
i
n
g
;


 
 
c
o
v
e
r
L
e
t
t
e
r
?
:
 
s
t
r
i
n
g
;


}




i
n
t
e
r
f
a
c
e
 
I
m
p
o
r
t
R
e
s
u
l
t
 
{


 
 
r
o
w
:
 
n
u
m
b
e
r
;


 
 
e
m
a
i
l
:
 
s
t
r
i
n
g
;


 
 
n
a
m
e
:
 
s
t
r
i
n
g
;


 
 
s
t
a
t
u
s
:
 
"
s
u
c
c
e
s
s
"
 
|
 
"
e
r
r
o
r
"
 
|
 
"
d
u
p
l
i
c
a
t
e
"
;


 
 
m
e
s
s
a
g
e
?
:
 
s
t
r
i
n
g
;


}




/
/
 
-
-
-
 
C
S
V
 
P
a
r
s
e
r
 
-
-
-


f
u
n
c
t
i
o
n
 
p
a
r
s
e
C
s
v
(
t
e
x
t
:
 
s
t
r
i
n
g
)
:
 
{
 
h
e
a
d
e
r
s
:
 
s
t
r
i
n
g
[
]
;
 
r
o
w
s
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
s
t
r
i
n
g
>
[
]
 
}
 
{


 
 
c
o
n
s
t
 
l
i
n
e
s
 
=
 
t
e
x
t
.
s
p
l
i
t
(
/
\
r
?
\
n
/
)
.
f
i
l
t
e
r
(
(
l
)
 
=
>
 
l
.
t
r
i
m
(
)
.
l
e
n
g
t
h
 
>
 
0
)
;


 
 
i
f
 
(
l
i
n
e
s
.
l
e
n
g
t
h
 
=
=
=
 
0
)
 
r
e
t
u
r
n
 
{
 
h
e
a
d
e
r
s
:
 
[
]
,
 
r
o
w
s
:
 
[
]
 
}
;




 
 
c
o
n
s
t
 
h
e
a
d
e
r
s
 
=
 
l
i
n
e
s
[
0
]
.
s
p
l
i
t
(
"
,
"
)
.
m
a
p
(
(
h
)
 
=
>
 
h
.
t
r
i
m
(
)
.
t
o
L
o
w
e
r
C
a
s
e
(
)
.
r
e
p
l
a
c
e
(
/
[
^
a
-
z
]
/
g
,
 
"
"
)
)
;


 
 
c
o
n
s
t
 
r
o
w
s
 
=
 
l
i
n
e
s
.
s
l
i
c
e
(
1
)
.
m
a
p
(
(
l
i
n
e
)
 
=
>
 
{


 
 
 
 
/
/
 
B
a
s
i
c
 
C
S
V
 
p
a
r
s
e
:
 
h
a
n
d
l
e
s
 
s
i
m
p
l
e
 
c
a
s
e
s
 
(
n
o
 
q
u
o
t
e
d
 
c
o
m
m
a
s
)


 
 
 
 
c
o
n
s
t
 
v
a
l
u
e
s
 
=
 
l
i
n
e
.
s
p
l
i
t
(
"
,
"
)
.
m
a
p
(
(
v
)
 
=
>
 
v
.
t
r
i
m
(
)
)
;


 
 
 
 
c
o
n
s
t
 
o
b
j
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
s
t
r
i
n
g
>
 
=
 
{
}
;


 
 
 
 
h
e
a
d
e
r
s
.
f
o
r
E
a
c
h
(
(
h
,
 
i
)
 
=
>
 
{
 
o
b
j
[
h
]
 
=
 
v
a
l
u
e
s
[
i
]
 
?
?
 
"
"
;
 
}
)
;


 
 
 
 
r
e
t
u
r
n
 
o
b
j
;


 
 
}
)
;


 
 
r
e
t
u
r
n
 
{
 
h
e
a
d
e
r
s
,
 
r
o
w
s
 
}
;


}




f
u
n
c
t
i
o
n
 
v
a
l
i
d
a
t
e
R
o
w
(
r
o
w
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
s
t
r
i
n
g
>
)
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
 
{


 
 
i
f
 
(
!
r
o
w
.
e
m
a
i
l
 
|
|
 
!
/
^
[
^
\
s
@
]
+
@
[
^
\
s
@
]
+
\
.
[
^
\
s
@
]
+
$
/
.
t
e
s
t
(
r
o
w
.
e
m
a
i
l
)
)
 
{


 
 
 
 
r
e
t
u
r
n
 
`
I
n
v
a
l
i
d
 
o
r
 
m
i
s
s
i
n
g
 
e
m
a
i
l
:
 
"
$
{
r
o
w
.
e
m
a
i
l
}
"
`
;


 
 
}


 
 
i
f
 
(
!
r
o
w
.
n
a
m
e
 
|
|
 
r
o
w
.
n
a
m
e
.
l
e
n
g
t
h
 
<
 
2
)
 
{


 
 
 
 
r
e
t
u
r
n
 
`
M
i
s
s
i
n
g
 
o
r
 
t
o
o
-
s
h
o
r
t
 
n
a
m
e
:
 
"
$
{
r
o
w
.
n
a
m
e
}
"
`
;


 
 
}


 
 
r
e
t
u
r
n
 
n
u
l
l
;


}




/
/
 
-
-
-
 
S
A
M
P
L
E
 
C
S
V
 
D
O
W
N
L
O
A
D
 
-
-
-


f
u
n
c
t
i
o
n
 
d
o
w
n
l
o
a
d
S
a
m
p
l
e
C
s
v
(
)
 
{


 
 
c
o
n
s
t
 
s
a
m
p
l
e
 
=
 
[


 
 
 
 
[
"
e
m
a
i
l
"
,
 
"
n
a
m
e
"
,
 
"
p
h
o
n
e
"
,
 
"
s
k
i
l
l
s
"
,
 
"
l
i
n
k
e
d
i
n
U
r
l
"
,
 
"
p
o
r
t
f
o
l
i
o
U
r
l
"
,
 
"
c
o
v
e
r
L
e
t
t
e
r
"
]
.
j
o
i
n
(
"
,
"
)
,


 
 
 
 
[
"
a
l
i
c
e
@
e
x
a
m
p
l
e
.
c
o
m
"
,
 
"
A
l
i
c
e
 
S
m
i
t
h
"
,
 
"
+
1
-
5
5
5
-
0
1
0
1
"
,
 
"
R
e
a
c
t
,
T
y
p
e
S
c
r
i
p
t
,
N
o
d
e
.
j
s
"
,
 
"
h
t
t
p
s
:
/
/
l
i
n
k
e
d
i
n
.
c
o
m
/
i
n
/
a
l
i
c
e
s
m
i
t
h
"
,
 
"
h
t
t
p
s
:
/
/
a
l
i
c
e
s
m
i
t
h
.
d
e
v
"
,
 
"
E
x
c
i
t
e
d
 
t
o
 
j
o
i
n
 
y
o
u
r
 
c
a
m
p
u
s
 
d
r
i
v
e
!
"
]
.
j
o
i
n
(
"
,
"
)
,


 
 
 
 
[
"
b
o
b
@
e
x
a
m
p
l
e
.
c
o
m
"
,
 
"
B
o
b
 
J
o
n
e
s
"
,
 
"
+
1
-
5
5
5
-
0
2
0
2
"
,
 
"
P
y
t
h
o
n
,
D
j
a
n
g
o
,
P
o
s
t
g
r
e
S
Q
L
"
,
 
"
h
t
t
p
s
:
/
/
l
i
n
k
e
d
i
n
.
c
o
m
/
i
n
/
b
o
b
j
o
n
e
s
"
,
 
"
"
,
 
"
L
o
o
k
i
n
g
 
f
o
r
w
a
r
d
 
t
o
 
t
h
e
 
o
p
p
o
r
t
u
n
i
t
y
.
"
]
.
j
o
i
n
(
"
,
"
)
,


 
 
]
.
j
o
i
n
(
"
\
n
"
)
;




 
 
c
o
n
s
t
 
b
l
o
b
 
=
 
n
e
w
 
B
l
o
b
(
[
s
a
m
p
l
e
]
,
 
{
 
t
y
p
e
:
 
"
t
e
x
t
/
c
s
v
"
 
}
)
;


 
 
c
o
n
s
t
 
u
r
l
 
=
 
U
R
L
.
c
r
e
a
t
e
O
b
j
e
c
t
U
R
L
(
b
l
o
b
)
;


 
 
c
o
n
s
t
 
a
 
=
 
d
o
c
u
m
e
n
t
.
c
r
e
a
t
e
E
l
e
m
e
n
t
(
"
a
"
)
;


 
 
a
.
h
r
e
f
 
=
 
u
r
l
;


 
 
a
.
d
o
w
n
l
o
a
d
 
=
 
"
c
a
n
d
i
d
a
t
e
s
_
i
m
p
o
r
t
_
t
e
m
p
l
a
t
e
.
c
s
v
"
;


 
 
a
.
c
l
i
c
k
(
)
;


 
 
U
R
L
.
r
e
v
o
k
e
O
b
j
e
c
t
U
R
L
(
u
r
l
)
;


}




e
x
p
o
r
t
 
d
e
f
a
u
l
t
 
f
u
n
c
t
i
o
n
 
C
a
n
d
i
d
a
t
e
I
m
p
o
r
t
P
a
g
e
(
)
 
{


 
 
c
o
n
s
t
 
{
 
i
d
:
 
j
o
b
I
d
 
}
 
=
 
u
s
e
P
a
r
a
m
s
<
{
 
i
d
:
 
s
t
r
i
n
g
 
}
>
(
)
;


 
 
c
o
n
s
t
 
f
i
l
e
I
n
p
u
t
R
e
f
 
=
 
u
s
e
R
e
f
<
H
T
M
L
I
n
p
u
t
E
l
e
m
e
n
t
>
(
n
u
l
l
)
;




 
 
c
o
n
s
t
 
[
f
i
l
e
,
 
s
e
t
F
i
l
e
]
 
=
 
u
s
e
S
t
a
t
e
<
F
i
l
e
 
|
 
n
u
l
l
>
(
n
u
l
l
)
;


 
 
c
o
n
s
t
 
[
p
r
e
v
i
e
w
,
 
s
e
t
P
r
e
v
i
e
w
]
 
=
 
u
s
e
S
t
a
t
e
<
C
s
v
R
o
w
[
]
>
(
[
]
)
;


 
 
c
o
n
s
t
 
[
p
a
r
s
e
E
r
r
o
r
,
 
s
e
t
P
a
r
s
e
E
r
r
o
r
]
 
=
 
u
s
e
S
t
a
t
e
<
s
t
r
i
n
g
 
|
 
n
u
l
l
>
(
n
u
l
l
)
;


 
 
c
o
n
s
t
 
[
v
a
l
i
d
a
t
i
o
n
E
r
r
o
r
s
,
 
s
e
t
V
a
l
i
d
a
t
i
o
n
E
r
r
o
r
s
]
 
=
 
u
s
e
S
t
a
t
e
<
s
t
r
i
n
g
[
]
>
(
[
]
)
;




 
 
c
o
n
s
t
 
[
i
m
p
o
r
t
i
n
g
,
 
s
e
t
I
m
p
o
r
t
i
n
g
]
 
=
 
u
s
e
S
t
a
t
e
(
f
a
l
s
e
)
;


 
 
c
o
n
s
t
 
[
r
e
s
u
l
t
s
,
 
s
e
t
R
e
s
u
l
t
s
]
 
=
 
u
s
e
S
t
a
t
e
<
I
m
p
o
r
t
R
e
s
u
l
t
[
]
>
(
[
]
)
;


 
 
c
o
n
s
t
 
[
d
o
n
e
,
 
s
e
t
D
o
n
e
]
 
=
 
u
s
e
S
t
a
t
e
(
f
a
l
s
e
)
;




 
 
c
o
n
s
t
 
h
a
n
d
l
e
F
i
l
e
S
e
l
e
c
t
 
=
 
u
s
e
C
a
l
l
b
a
c
k
(
(
f
:
 
F
i
l
e
)
 
=
>
 
{


 
 
 
 
s
e
t
F
i
l
e
(
f
)
;


 
 
 
 
s
e
t
R
e
s
u
l
t
s
(
[
]
)
;


 
 
 
 
s
e
t
D
o
n
e
(
f
a
l
s
e
)
;


 
 
 
 
s
e
t
P
a
r
s
e
E
r
r
o
r
(
n
u
l
l
)
;


 
 
 
 
s
e
t
V
a
l
i
d
a
t
i
o
n
E
r
r
o
r
s
(
[
]
)
;


 
 
 
 
s
e
t
P
r
e
v
i
e
w
(
[
]
)
;




 
 
 
 
c
o
n
s
t
 
r
e
a
d
e
r
 
=
 
n
e
w
 
F
i
l
e
R
e
a
d
e
r
(
)
;


 
 
 
 
r
e
a
d
e
r
.
o
n
l
o
a
d
 
=
 
(
e
)
 
=
>
 
{


 
 
 
 
 
 
c
o
n
s
t
 
t
e
x
t
 
=
 
e
.
t
a
r
g
e
t
?
.
r
e
s
u
l
t
 
a
s
 
s
t
r
i
n
g
;


 
 
 
 
 
 
c
o
n
s
t
 
{
 
h
e
a
d
e
r
s
,
 
r
o
w
s
 
}
 
=
 
p
a
r
s
e
C
s
v
(
t
e
x
t
)
;




 
 
 
 
 
 
/
/
 
C
h
e
c
k
 
r
e
q
u
i
r
e
d
 
h
e
a
d
e
r
s


 
 
 
 
 
 
c
o
n
s
t
 
m
i
s
s
i
n
g
 
=
 
R
E
Q
U
I
R
E
D
_
H
E
A
D
E
R
S
.
f
i
l
t
e
r
(
(
h
)
 
=
>
 
!
h
e
a
d
e
r
s
.
i
n
c
l
u
d
e
s
(
h
)
)
;


 
 
 
 
 
 
i
f
 
(
m
i
s
s
i
n
g
.
l
e
n
g
t
h
 
>
 
0
)
 
{


 
 
 
 
 
 
 
 
s
e
t
P
a
r
s
e
E
r
r
o
r
(
`
M
i
s
s
i
n
g
 
r
e
q
u
i
r
e
d
 
C
S
V
 
c
o
l
u
m
n
s
:
 
$
{
m
i
s
s
i
n
g
.
j
o
i
n
(
"
,
 
"
)
}
.
 
F
o
u
n
d
:
 
$
{
h
e
a
d
e
r
s
.
j
o
i
n
(
"
,
 
"
)
}
`
)
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
;


 
 
 
 
 
 
}




 
 
 
 
 
 
/
/
 
V
a
l
i
d
a
t
e
 
e
a
c
h
 
r
o
w


 
 
 
 
 
 
c
o
n
s
t
 
e
r
r
o
r
s
:
 
s
t
r
i
n
g
[
]
 
=
 
[
]
;


 
 
 
 
 
 
c
o
n
s
t
 
v
a
l
i
d
R
o
w
s
:
 
C
s
v
R
o
w
[
]
 
=
 
[
]
;


 
 
 
 
 
 
r
o
w
s
.
f
o
r
E
a
c
h
(
(
r
o
w
,
 
i
d
x
)
 
=
>
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
e
r
r
 
=
 
v
a
l
i
d
a
t
e
R
o
w
(
r
o
w
)
;


 
 
 
 
 
 
 
 
i
f
 
(
e
r
r
)
 
{


 
 
 
 
 
 
 
 
 
 
e
r
r
o
r
s
.
p
u
s
h
(
`
R
o
w
 
$
{
i
d
x
 
+
 
2
}
:
 
$
{
e
r
r
}
`
)
;


 
 
 
 
 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
 
 
 
 
v
a
l
i
d
R
o
w
s
.
p
u
s
h
(
r
o
w
 
a
s
 
C
s
v
R
o
w
)
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
}
)
;




 
 
 
 
 
 
s
e
t
V
a
l
i
d
a
t
i
o
n
E
r
r
o
r
s
(
e
r
r
o
r
s
)
;


 
 
 
 
 
 
s
e
t
P
r
e
v
i
e
w
(
v
a
l
i
d
R
o
w
s
.
s
l
i
c
e
(
0
,
 
5
)
)
;
 
/
/
 
S
h
o
w
 
f
i
r
s
t
 
5
 
a
s
 
p
r
e
v
i
e
w


 
 
 
 
}
;


 
 
 
 
r
e
a
d
e
r
.
r
e
a
d
A
s
T
e
x
t
(
f
)
;


 
 
}
,
 
[
]
)
;




 
 
c
o
n
s
t
 
h
a
n
d
l
e
D
r
o
p
 
=
 
u
s
e
C
a
l
l
b
a
c
k
(
(
e
:
 
R
e
a
c
t
.
D
r
a
g
E
v
e
n
t
<
H
T
M
L
D
i
v
E
l
e
m
e
n
t
>
)
 
=
>
 
{


 
 
 
 
e
.
p
r
e
v
e
n
t
D
e
f
a
u
l
t
(
)
;


 
 
 
 
c
o
n
s
t
 
f
 
=
 
e
.
d
a
t
a
T
r
a
n
s
f
e
r
.
f
i
l
e
s
[
0
]
;


 
 
 
 
i
f
 
(
f
 
&
&
 
f
.
n
a
m
e
.
e
n
d
s
W
i
t
h
(
"
.
c
s
v
"
)
)
 
h
a
n
d
l
e
F
i
l
e
S
e
l
e
c
t
(
f
)
;


 
 
}
,
 
[
h
a
n
d
l
e
F
i
l
e
S
e
l
e
c
t
]
)
;




 
 
c
o
n
s
t
 
h
a
n
d
l
e
I
m
p
o
r
t
 
=
 
a
s
y
n
c
 
(
)
 
=
>
 
{


 
 
 
 
i
f
 
(
!
f
i
l
e
 
|
|
 
!
j
o
b
I
d
)
 
r
e
t
u
r
n
;


 
 
 
 
s
e
t
I
m
p
o
r
t
i
n
g
(
t
r
u
e
)
;


 
 
 
 
s
e
t
R
e
s
u
l
t
s
(
[
]
)
;




 
 
 
 
c
o
n
s
t
 
r
e
a
d
e
r
 
=
 
n
e
w
 
F
i
l
e
R
e
a
d
e
r
(
)
;


 
 
 
 
r
e
a
d
e
r
.
o
n
l
o
a
d
 
=
 
a
s
y
n
c
 
(
e
)
 
=
>
 
{


 
 
 
 
 
 
c
o
n
s
t
 
t
e
x
t
 
=
 
e
.
t
a
r
g
e
t
?
.
r
e
s
u
l
t
 
a
s
 
s
t
r
i
n
g
;


 
 
 
 
 
 
c
o
n
s
t
 
{
 
r
o
w
s
 
}
 
=
 
p
a
r
s
e
C
s
v
(
t
e
x
t
)
;


 
 
 
 
 
 
c
o
n
s
t
 
i
m
p
o
r
t
R
e
s
u
l
t
s
:
 
I
m
p
o
r
t
R
e
s
u
l
t
[
]
 
=
 
[
]
;




 
 
 
 
 
 
f
o
r
 
(
l
e
t
 
i
 
=
 
0
;
 
i
 
<
 
r
o
w
s
.
l
e
n
g
t
h
;
 
i
+
+
)
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
r
o
w
 
=
 
r
o
w
s
[
i
]
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
v
a
l
i
d
a
t
i
o
n
E
r
r
 
=
 
v
a
l
i
d
a
t
e
R
o
w
(
r
o
w
)
;


 
 
 
 
 
 
 
 
i
f
 
(
v
a
l
i
d
a
t
i
o
n
E
r
r
)
 
{


 
 
 
 
 
 
 
 
 
 
i
m
p
o
r
t
R
e
s
u
l
t
s
.
p
u
s
h
(
{
 
r
o
w
:
 
i
 
+
 
2
,
 
e
m
a
i
l
:
 
r
o
w
.
e
m
a
i
l
,
 
n
a
m
e
:
 
r
o
w
.
n
a
m
e
,
 
s
t
a
t
u
s
:
 
"
e
r
r
o
r
"
,
 
m
e
s
s
a
g
e
:
 
v
a
l
i
d
a
t
i
o
n
E
r
r
 
}
)
;


 
 
 
 
 
 
 
 
 
 
c
o
n
t
i
n
u
e
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
t
r
y
 
{


 
 
 
 
 
 
 
 
 
 
a
w
a
i
t
 
a
p
i
.
p
o
s
t
(
`
/
r
e
c
r
u
i
t
e
r
/
j
o
b
s
/
$
{
j
o
b
I
d
}
/
c
a
n
d
i
d
a
t
e
s
/
i
m
p
o
r
t
`
,
 
{


 
 
 
 
 
 
 
 
 
 
 
 
e
m
a
i
l
:
 
r
o
w
.
e
m
a
i
l
,


 
 
 
 
 
 
 
 
 
 
 
 
n
a
m
e
:
 
r
o
w
.
n
a
m
e
,


 
 
 
 
 
 
 
 
 
 
 
 
p
h
o
n
e
:
 
r
o
w
.
p
h
o
n
e
 
|
|
 
u
n
d
e
f
i
n
e
d
,


 
 
 
 
 
 
 
 
 
 
 
 
s
k
i
l
l
s
:
 
r
o
w
.
s
k
i
l
l
s
 
?
 
r
o
w
.
s
k
i
l
l
s
.
s
p
l
i
t
(
"
;
"
)
.
m
a
p
(
(
s
:
 
s
t
r
i
n
g
)
 
=
>
 
s
.
t
r
i
m
(
)
)
.
f
i
l
t
e
r
(
B
o
o
l
e
a
n
)
 
:
 
u
n
d
e
f
i
n
e
d
,


 
 
 
 
 
 
 
 
 
 
 
 
l
i
n
k
e
d
i
n
U
r
l
:
 
r
o
w
.
l
i
n
k
e
d
i
n
U
r
l
 
|
|
 
u
n
d
e
f
i
n
e
d
,


 
 
 
 
 
 
 
 
 
 
 
 
p
o
r
t
f
o
l
i
o
U
r
l
:
 
r
o
w
.
p
o
r
t
f
o
l
i
o
U
r
l
 
|
|
 
u
n
d
e
f
i
n
e
d
,


 
 
 
 
 
 
 
 
 
 
 
 
c
o
v
e
r
L
e
t
t
e
r
:
 
r
o
w
.
c
o
v
e
r
L
e
t
t
e
r
 
|
|
 
u
n
d
e
f
i
n
e
d
,


 
 
 
 
 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
 
 
 
 
i
m
p
o
r
t
R
e
s
u
l
t
s
.
p
u
s
h
(
{
 
r
o
w
:
 
i
 
+
 
2
,
 
e
m
a
i
l
:
 
r
o
w
.
e
m
a
i
l
,
 
n
a
m
e
:
 
r
o
w
.
n
a
m
e
,
 
s
t
a
t
u
s
:
 
"
s
u
c
c
e
s
s
"
 
}
)
;


 
 
 
 
 
 
 
 
}
 
c
a
t
c
h
 
(
e
r
r
:
 
u
n
k
n
o
w
n
)
 
{


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
a
x
i
o
s
E
r
r
 
=
 
e
r
r
 
a
s
 
{
 
r
e
s
p
o
n
s
e
?
:
 
{
 
s
t
a
t
u
s
?
:
 
n
u
m
b
e
r
;
 
d
a
t
a
?
:
 
{
 
m
e
s
s
a
g
e
?
:
 
s
t
r
i
n
g
 
}
 
}
 
}
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
s
t
a
t
u
s
 
=
 
a
x
i
o
s
E
r
r
?
.
r
e
s
p
o
n
s
e
?
.
s
t
a
t
u
s
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
m
s
g
 
=
 
a
x
i
o
s
E
r
r
?
.
r
e
s
p
o
n
s
e
?
.
d
a
t
a
?
.
m
e
s
s
a
g
e
 
|
|
 
"
U
n
k
n
o
w
n
 
e
r
r
o
r
"
;


 
 
 
 
 
 
 
 
 
 
i
m
p
o
r
t
R
e
s
u
l
t
s
.
p
u
s
h
(
{


 
 
 
 
 
 
 
 
 
 
 
 
r
o
w
:
 
i
 
+
 
2
,


 
 
 
 
 
 
 
 
 
 
 
 
e
m
a
i
l
:
 
r
o
w
.
e
m
a
i
l
,


 
 
 
 
 
 
 
 
 
 
 
 
n
a
m
e
:
 
r
o
w
.
n
a
m
e
,


 
 
 
 
 
 
 
 
 
 
 
 
s
t
a
t
u
s
:
 
s
t
a
t
u
s
 
=
=
=
 
4
0
9
 
?
 
"
d
u
p
l
i
c
a
t
e
"
 
:
 
"
e
r
r
o
r
"
,


 
 
 
 
 
 
 
 
 
 
 
 
m
e
s
s
a
g
e
:
 
s
t
a
t
u
s
 
=
=
=
 
4
0
9
 
?
 
"
A
l
r
e
a
d
y
 
i
m
p
o
r
t
e
d
 
o
r
 
e
m
a
i
l
 
e
x
i
s
t
s
"
 
:
 
m
s
g
,


 
 
 
 
 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
}




 
 
 
 
 
 
s
e
t
R
e
s
u
l
t
s
(
i
m
p
o
r
t
R
e
s
u
l
t
s
)
;


 
 
 
 
 
 
s
e
t
D
o
n
e
(
t
r
u
e
)
;


 
 
 
 
 
 
s
e
t
I
m
p
o
r
t
i
n
g
(
f
a
l
s
e
)
;


 
 
 
 
}
;


 
 
 
 
r
e
a
d
e
r
.
r
e
a
d
A
s
T
e
x
t
(
f
i
l
e
)
;


 
 
}
;




 
 
c
o
n
s
t
 
s
u
c
c
e
s
s
C
o
u
n
t
 
=
 
r
e
s
u
l
t
s
.
f
i
l
t
e
r
(
(
r
)
 
=
>
 
r
.
s
t
a
t
u
s
 
=
=
=
 
"
s
u
c
c
e
s
s
"
)
.
l
e
n
g
t
h
;


 
 
c
o
n
s
t
 
e
r
r
o
r
C
o
u
n
t
 
=
 
r
e
s
u
l
t
s
.
f
i
l
t
e
r
(
(
r
)
 
=
>
 
r
.
s
t
a
t
u
s
 
=
=
=
 
"
e
r
r
o
r
"
)
.
l
e
n
g
t
h
;


 
 
c
o
n
s
t
 
d
u
p
C
o
u
n
t
 
=
 
r
e
s
u
l
t
s
.
f
i
l
t
e
r
(
(
r
)
 
=
>
 
r
.
s
t
a
t
u
s
 
=
=
=
 
"
d
u
p
l
i
c
a
t
e
"
)
.
l
e
n
g
t
h
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
m
a
x
-
w
-
3
x
l
 
m
x
-
a
u
t
o
 
s
p
a
c
e
-
y
-
6
"
>


 
 
 
 
 
 
<
S
E
O
 
t
i
t
l
e
=
"
I
m
p
o
r
t
 
C
a
n
d
i
d
a
t
e
s
"
 
n
o
I
n
d
e
x
 
/
>




 
 
 
 
 
 
{
/
*
 
H
e
a
d
e
r
 
*
/
}


 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
<
L
i
n
k


 
 
 
 
 
 
 
 
 
 
t
o
=
{
`
/
r
e
c
r
u
i
t
e
r
s
/
j
o
b
s
/
$
{
j
o
b
I
d
}
/
a
p
p
l
i
c
a
t
i
o
n
s
`
}


 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
 
t
e
x
t
-
s
m
 
t
e
x
t
-
g
r
a
y
-
5
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
5
0
0
 
h
o
v
e
r
:
t
e
x
t
-
b
l
a
c
k
 
d
a
r
k
:
h
o
v
e
r
:
t
e
x
t
-
w
h
i
t
e
 
m
b
-
4
 
n
o
-
u
n
d
e
r
l
i
n
e
"


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
<
A
r
r
o
w
L
e
f
t
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
"
 
/
>
 
B
a
c
k
 
t
o
 
A
p
p
l
i
c
a
t
i
o
n
s


 
 
 
 
 
 
 
 
<
/
L
i
n
k
>


 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
s
t
a
r
t
 
j
u
s
t
i
f
y
-
b
e
t
w
e
e
n
 
g
a
p
-
4
"
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
h
1
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
2
x
l
 
f
o
n
t
-
b
o
l
d
 
t
e
x
t
-
g
r
a
y
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
w
h
i
t
e
 
m
b
-
1
"
>
I
m
p
o
r
t
 
C
a
n
d
i
d
a
t
e
s
<
/
h
1
>


 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
t
e
x
t
-
g
r
a
y
-
5
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
U
p
l
o
a
d
 
a
 
C
S
V
 
f
i
l
e
 
t
o
 
b
u
l
k
-
i
m
p
o
r
t
 
c
a
n
d
i
d
a
t
e
s
 
f
o
r
 
t
h
i
s
 
c
a
m
p
u
s
 
r
e
c
r
u
i
t
m
e
n
t
 
d
r
i
v
e
.


 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
d
o
w
n
l
o
a
d
S
a
m
p
l
e
C
s
v
}


 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
1
.
5
 
t
e
x
t
-
x
s
 
p
x
-
3
 
p
y
-
2
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
a
y
-
3
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
g
r
a
y
-
6
0
0
 
r
o
u
n
d
e
d
-
l
g
 
h
o
v
e
r
:
b
g
-
g
r
a
y
-
5
0
 
d
a
r
k
:
h
o
v
e
r
:
b
g
-
g
r
a
y
-
8
0
0
 
t
e
x
t
-
g
r
a
y
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
4
0
0
 
t
r
a
n
s
i
t
i
o
n
-
c
o
l
o
r
s
 
w
h
i
t
e
s
p
a
c
e
-
n
o
w
r
a
p
"


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
D
o
w
n
l
o
a
d
 
c
l
a
s
s
N
a
m
e
=
"
w
-
3
.
5
 
h
-
3
.
5
"
 
/
>
 
S
a
m
p
l
e
 
C
S
V


 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
{
/
*
 
D
r
o
p
 
Z
o
n
e
 
*
/
}


 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
o
n
D
r
a
g
O
v
e
r
=
{
(
e
)
 
=
>
 
e
.
p
r
e
v
e
n
t
D
e
f
a
u
l
t
(
)
}


 
 
 
 
 
 
 
 
o
n
D
r
o
p
=
{
h
a
n
d
l
e
D
r
o
p
}


 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
f
i
l
e
I
n
p
u
t
R
e
f
.
c
u
r
r
e
n
t
?
.
c
l
i
c
k
(
)
}


 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
{
`
b
o
r
d
e
r
-
2
 
b
o
r
d
e
r
-
d
a
s
h
e
d
 
r
o
u
n
d
e
d
-
2
x
l
 
p
-
1
0
 
t
e
x
t
-
c
e
n
t
e
r
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
 
t
r
a
n
s
i
t
i
o
n
-
a
l
l
 
$
{


 
 
 
 
 
 
 
 
 
 
f
i
l
e


 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
b
o
r
d
e
r
-
g
r
e
e
n
-
4
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
g
r
e
e
n
-
6
0
0
 
b
g
-
g
r
e
e
n
-
5
0
/
5
0
 
d
a
r
k
:
b
g
-
g
r
e
e
n
-
9
0
0
/
1
0
"


 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
b
o
r
d
e
r
-
g
r
a
y
-
3
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
g
r
a
y
-
7
0
0
 
h
o
v
e
r
:
b
o
r
d
e
r
-
g
r
a
y
-
4
0
0
 
d
a
r
k
:
h
o
v
e
r
:
b
o
r
d
e
r
-
g
r
a
y
-
6
0
0
 
b
g
-
g
r
a
y
-
5
0
/
5
0
 
d
a
r
k
:
b
g
-
g
r
a
y
-
9
0
0
/
3
0
"


 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
r
e
f
=
{
f
i
l
e
I
n
p
u
t
R
e
f
}


 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
f
i
l
e
"


 
 
 
 
 
 
 
 
 
 
a
c
c
e
p
t
=
"
.
c
s
v
"


 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
h
i
d
d
e
n
"


 
 
 
 
 
 
 
 
 
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
{
 
c
o
n
s
t
 
f
 
=
 
e
.
t
a
r
g
e
t
.
f
i
l
e
s
?
.
[
0
]
;
 
i
f
 
(
f
)
 
h
a
n
d
l
e
F
i
l
e
S
e
l
e
c
t
(
f
)
;
 
}
}


 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
<
U
p
l
o
a
d
 
c
l
a
s
s
N
a
m
e
=
"
w
-
1
0
 
h
-
1
0
 
m
x
-
a
u
t
o
 
m
b
-
3
 
t
e
x
t
-
g
r
a
y
-
4
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
6
0
0
"
 
/
>


 
 
 
 
 
 
 
 
{
f
i
l
e
 
?
 
(


 
 
 
 
 
 
 
 
 
 
<
>


 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
f
o
n
t
-
s
e
m
i
b
o
l
d
 
t
e
x
t
-
g
r
a
y
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
w
h
i
t
e
"
>
{
f
i
l
e
.
n
a
m
e
}
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
t
e
x
t
-
g
r
a
y
-
5
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
4
0
0
 
m
t
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
r
e
v
i
e
w
.
l
e
n
g
t
h
}
 
v
a
l
i
d
 
r
o
w
s
 
d
e
t
e
c
t
e
d
 
—
 
c
l
i
c
k
 
t
o
 
c
h
a
n
g
e


 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
<
/
>


 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
<
>


 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
f
o
n
t
-
s
e
m
i
b
o
l
d
 
t
e
x
t
-
g
r
a
y
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
3
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
D
r
o
p
 
a
 
C
S
V
 
f
i
l
e
 
h
e
r
e
,
 
o
r
 
c
l
i
c
k
 
t
o
 
b
r
o
w
s
e


 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
t
e
x
t
-
g
r
a
y
-
4
0
0
 
m
t
-
1
"
>
R
e
q
u
i
r
e
d
 
c
o
l
u
m
n
s
:
 
<
c
o
d
e
>
e
m
a
i
l
<
/
c
o
d
e
>
,
 
<
c
o
d
e
>
n
a
m
e
<
/
c
o
d
e
>
<
/
p
>


 
 
 
 
 
 
 
 
 
 
<
/
>


 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
{
/
*
 
P
a
r
s
e
 
E
r
r
o
r
 
*
/
}


 
 
 
 
 
 
<
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
>


 
 
 
 
 
 
 
 
{
p
a
r
s
e
E
r
r
o
r
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
-
8
 
}
}
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
y
:
 
0
 
}
}
 
e
x
i
t
=
{
{
 
o
p
a
c
i
t
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
s
t
a
r
t
 
g
a
p
-
3
 
p
-
4
 
b
g
-
r
e
d
-
5
0
 
d
a
r
k
:
b
g
-
r
e
d
-
9
0
0
/
2
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
r
e
d
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
r
e
d
-
8
0
0
 
r
o
u
n
d
e
d
-
x
l
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
A
l
e
r
t
C
i
r
c
l
e
 
c
l
a
s
s
N
a
m
e
=
"
w
-
5
 
h
-
5
 
t
e
x
t
-
r
e
d
-
5
0
0
 
f
l
e
x
-
s
h
r
i
n
k
-
0
 
m
t
-
0
.
5
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
t
e
x
t
-
r
e
d
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
r
e
d
-
3
0
0
 
f
o
n
t
-
m
e
d
i
u
m
"
>
{
p
a
r
s
e
E
r
r
o
r
}
<
/
p
>


 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>


 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
<
/
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
>




 
 
 
 
 
 
{
/
*
 
V
a
l
i
d
a
t
i
o
n
 
E
r
r
o
r
s
 
*
/
}


 
 
 
 
 
 
<
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
>


 
 
 
 
 
 
 
 
{
v
a
l
i
d
a
t
i
o
n
E
r
r
o
r
s
.
l
e
n
g
t
h
 
>
 
0
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
-
8
 
}
}
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
y
:
 
0
 
}
}
 
e
x
i
t
=
{
{
 
o
p
a
c
i
t
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
p
-
4
 
b
g
-
a
m
b
e
r
-
5
0
 
d
a
r
k
:
b
g
-
a
m
b
e
r
-
9
0
0
/
2
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
a
m
b
e
r
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
a
m
b
e
r
-
8
0
0
 
r
o
u
n
d
e
d
-
x
l
 
s
p
a
c
e
-
y
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
f
o
n
t
-
s
e
m
i
b
o
l
d
 
t
e
x
t
-
a
m
b
e
r
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
a
m
b
e
r
-
3
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
v
a
l
i
d
a
t
i
o
n
E
r
r
o
r
s
.
l
e
n
g
t
h
}
 
r
o
w
(
s
)
 
w
i
l
l
 
b
e
 
s
k
i
p
p
e
d
 
d
u
e
 
t
o
 
v
a
l
i
d
a
t
i
o
n
 
e
r
r
o
r
s
:


 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
{
v
a
l
i
d
a
t
i
o
n
E
r
r
o
r
s
.
s
l
i
c
e
(
0
,
 
5
)
.
m
a
p
(
(
e
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
k
e
y
=
{
i
}
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
x
s
 
t
e
x
t
-
a
m
b
e
r
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
a
m
b
e
r
-
4
0
0
"
>
•
 
{
e
}
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
{
v
a
l
i
d
a
t
i
o
n
E
r
r
o
r
s
.
l
e
n
g
t
h
 
>
 
5
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
x
s
 
t
e
x
t
-
a
m
b
e
r
-
5
0
0
"
>
…
a
n
d
 
{
v
a
l
i
d
a
t
i
o
n
E
r
r
o
r
s
.
l
e
n
g
t
h
 
-
 
5
}
 
m
o
r
e
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>


 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
<
/
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
>




 
 
 
 
 
 
{
/
*
 
P
r
e
v
i
e
w
 
*
/
}


 
 
 
 
 
 
{
p
r
e
v
i
e
w
.
l
e
n
g
t
h
 
>
 
0
 
&
&
 
!
d
o
n
e
 
&
&
 
(


 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
g
r
a
y
-
9
0
0
 
r
o
u
n
d
e
d
-
x
l
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
a
y
-
1
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
g
r
a
y
-
8
0
0
 
o
v
e
r
f
l
o
w
-
h
i
d
d
e
n
"
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
p
x
-
5
 
p
y
-
3
 
b
o
r
d
e
r
-
b
 
b
o
r
d
e
r
-
g
r
a
y
-
1
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
g
r
a
y
-
8
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
f
o
n
t
-
s
e
m
i
b
o
l
d
 
t
e
x
t
-
g
r
a
y
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
3
0
0
"
>
P
r
e
v
i
e
w
 
(
f
i
r
s
t
 
{
p
r
e
v
i
e
w
.
l
e
n
g
t
h
}
 
r
o
w
s
)
<
/
p
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
t
a
b
l
e
 
c
l
a
s
s
N
a
m
e
=
"
w
-
f
u
l
l
 
t
e
x
t
-
s
m
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
t
h
e
a
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
r
 
c
l
a
s
s
N
a
m
e
=
"
b
o
r
d
e
r
-
b
 
b
o
r
d
e
r
-
g
r
a
y
-
1
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
g
r
a
y
-
8
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
h
 
s
c
o
p
e
=
"
c
o
l
"
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
l
e
f
t
 
t
e
x
t
-
x
s
 
f
o
n
t
-
m
e
d
i
u
m
 
t
e
x
t
-
g
r
a
y
-
5
0
0
 
u
p
p
e
r
c
a
s
e
 
p
x
-
5
 
p
y
-
2
"
>
N
a
m
e
<
/
t
h
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
h
 
s
c
o
p
e
=
"
c
o
l
"
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
l
e
f
t
 
t
e
x
t
-
x
s
 
f
o
n
t
-
m
e
d
i
u
m
 
t
e
x
t
-
g
r
a
y
-
5
0
0
 
u
p
p
e
r
c
a
s
e
 
p
x
-
5
 
p
y
-
2
"
>
E
m
a
i
l
<
/
t
h
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
h
 
s
c
o
p
e
=
"
c
o
l
"
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
l
e
f
t
 
t
e
x
t
-
x
s
 
f
o
n
t
-
m
e
d
i
u
m
 
t
e
x
t
-
g
r
a
y
-
5
0
0
 
u
p
p
e
r
c
a
s
e
 
p
x
-
5
 
p
y
-
2
"
>
P
h
o
n
e
<
/
t
h
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
h
 
s
c
o
p
e
=
"
c
o
l
"
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
l
e
f
t
 
t
e
x
t
-
x
s
 
f
o
n
t
-
m
e
d
i
u
m
 
t
e
x
t
-
g
r
a
y
-
5
0
0
 
u
p
p
e
r
c
a
s
e
 
p
x
-
5
 
p
y
-
2
"
>
S
k
i
l
l
s
<
/
t
h
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
r
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
h
e
a
d
>


 
 
 
 
 
 
 
 
 
 
 
 
<
t
b
o
d
y
 
c
l
a
s
s
N
a
m
e
=
"
d
i
v
i
d
e
-
y
 
d
i
v
i
d
e
-
g
r
a
y
-
5
0
 
d
a
r
k
:
d
i
v
i
d
e
-
g
r
a
y
-
8
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
r
e
v
i
e
w
.
m
a
p
(
(
r
o
w
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
r
 
k
e
y
=
{
i
}
 
c
l
a
s
s
N
a
m
e
=
"
h
o
v
e
r
:
b
g
-
g
r
a
y
-
5
0
 
d
a
r
k
:
h
o
v
e
r
:
b
g
-
g
r
a
y
-
8
0
0
 
t
r
a
n
s
i
t
i
o
n
-
c
o
l
o
r
s
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
d
 
c
l
a
s
s
N
a
m
e
=
"
p
x
-
5
 
p
y
-
3
 
f
o
n
t
-
m
e
d
i
u
m
 
t
e
x
t
-
g
r
a
y
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
w
h
i
t
e
"
>
{
r
o
w
.
n
a
m
e
}
<
/
t
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
d
 
c
l
a
s
s
N
a
m
e
=
"
p
x
-
5
 
p
y
-
3
 
t
e
x
t
-
g
r
a
y
-
5
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
4
0
0
"
>
{
r
o
w
.
e
m
a
i
l
}
<
/
t
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
d
 
c
l
a
s
s
N
a
m
e
=
"
p
x
-
5
 
p
y
-
3
 
t
e
x
t
-
g
r
a
y
-
5
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
4
0
0
"
>
{
r
o
w
.
p
h
o
n
e
 
|
|
 
"
—
"
}
<
/
t
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
d
 
c
l
a
s
s
N
a
m
e
=
"
p
x
-
5
 
p
y
-
3
 
t
e
x
t
-
g
r
a
y
-
5
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
4
0
0
 
t
e
x
t
-
x
s
"
>
{
r
o
w
.
s
k
i
l
l
s
 
|
|
 
"
—
"
}
<
/
t
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
r
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
b
o
d
y
>


 
 
 
 
 
 
 
 
 
 
<
/
t
a
b
l
e
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
)
}




 
 
 
 
 
 
{
/
*
 
I
m
p
o
r
t
 
B
u
t
t
o
n
 
*
/
}


 
 
 
 
 
 
{
f
i
l
e
 
&
&
 
!
p
a
r
s
e
E
r
r
o
r
 
&
&
 
!
d
o
n
e
 
&
&
 
(


 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
h
a
n
d
l
e
I
m
p
o
r
t
}


 
 
 
 
 
 
 
 
 
 
d
i
s
a
b
l
e
d
=
{
i
m
p
o
r
t
i
n
g
 
|
|
 
p
r
e
v
i
e
w
.
l
e
n
g
t
h
 
=
=
=
 
0
}


 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
{
`
w
-
f
u
l
l
 
p
y
-
3
 
r
o
u
n
d
e
d
-
x
l
 
f
o
n
t
-
b
o
l
d
 
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
j
u
s
t
i
f
y
-
c
e
n
t
e
r
 
g
a
p
-
2
 
t
r
a
n
s
i
t
i
o
n
-
a
l
l
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
i
m
p
o
r
t
i
n
g
 
|
|
 
p
r
e
v
i
e
w
.
l
e
n
g
t
h
 
=
=
=
 
0


 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
b
g
-
g
r
a
y
-
2
0
0
 
d
a
r
k
:
b
g
-
g
r
a
y
-
8
0
0
 
t
e
x
t
-
g
r
a
y
-
4
0
0
 
c
u
r
s
o
r
-
n
o
t
-
a
l
l
o
w
e
d
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
b
g
-
b
l
a
c
k
 
d
a
r
k
:
b
g
-
w
h
i
t
e
 
t
e
x
t
-
w
h
i
t
e
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
9
5
0
 
h
o
v
e
r
:
b
g
-
g
r
a
y
-
8
0
0
 
d
a
r
k
:
h
o
v
e
r
:
b
g
-
g
r
a
y
-
2
0
0
 
s
h
a
d
o
w
-
l
g
"


 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
{
i
m
p
o
r
t
i
n
g
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
L
o
a
d
e
r
2
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
 
a
n
i
m
a
t
e
-
s
p
i
n
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
I
m
p
o
r
t
i
n
g
 
c
a
n
d
i
d
a
t
e
s
…


 
 
 
 
 
 
 
 
 
 
 
 
<
/
>


 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
U
p
l
o
a
d
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
I
m
p
o
r
t
 
{
p
r
e
v
i
e
w
.
l
e
n
g
t
h
}
+
 
c
a
n
d
i
d
a
t
e
s


 
 
 
 
 
 
 
 
 
 
 
 
<
/
>


 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
)
}




 
 
 
 
 
 
{
/
*
 
I
m
p
o
r
t
 
R
e
s
u
l
t
s
 
*
/
}


 
 
 
 
 
 
<
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
>


 
 
 
 
 
 
 
 
{
d
o
n
e
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
8
 
}
}
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
y
:
 
0
 
}
}
 
c
l
a
s
s
N
a
m
e
=
"
s
p
a
c
e
-
y
-
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
S
u
m
m
a
r
y
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
g
r
i
d
 
g
r
i
d
-
c
o
l
s
-
3
 
g
a
p
-
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
p
-
4
 
b
g
-
g
r
e
e
n
-
5
0
 
d
a
r
k
:
b
g
-
g
r
e
e
n
-
9
0
0
/
2
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
e
e
n
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
g
r
e
e
n
-
8
0
0
 
r
o
u
n
d
e
d
-
x
l
 
t
e
x
t
-
c
e
n
t
e
r
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
2
x
l
 
f
o
n
t
-
b
l
a
c
k
 
t
e
x
t
-
g
r
e
e
n
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
e
e
n
-
4
0
0
"
>
{
s
u
c
c
e
s
s
C
o
u
n
t
}
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
x
s
 
f
o
n
t
-
m
e
d
i
u
m
 
t
e
x
t
-
g
r
e
e
n
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
e
e
n
-
3
0
0
 
m
t
-
1
"
>
I
m
p
o
r
t
e
d
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
p
-
4
 
b
g
-
a
m
b
e
r
-
5
0
 
d
a
r
k
:
b
g
-
a
m
b
e
r
-
9
0
0
/
2
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
a
m
b
e
r
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
a
m
b
e
r
-
8
0
0
 
r
o
u
n
d
e
d
-
x
l
 
t
e
x
t
-
c
e
n
t
e
r
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
2
x
l
 
f
o
n
t
-
b
l
a
c
k
 
t
e
x
t
-
a
m
b
e
r
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
a
m
b
e
r
-
4
0
0
"
>
{
d
u
p
C
o
u
n
t
}
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
x
s
 
f
o
n
t
-
m
e
d
i
u
m
 
t
e
x
t
-
a
m
b
e
r
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
a
m
b
e
r
-
3
0
0
 
m
t
-
1
"
>
D
u
p
l
i
c
a
t
e
s
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
p
-
4
 
b
g
-
r
e
d
-
5
0
 
d
a
r
k
:
b
g
-
r
e
d
-
9
0
0
/
2
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
r
e
d
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
r
e
d
-
8
0
0
 
r
o
u
n
d
e
d
-
x
l
 
t
e
x
t
-
c
e
n
t
e
r
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
2
x
l
 
f
o
n
t
-
b
l
a
c
k
 
t
e
x
t
-
r
e
d
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
r
e
d
-
4
0
0
"
>
{
e
r
r
o
r
C
o
u
n
t
}
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
x
s
 
f
o
n
t
-
m
e
d
i
u
m
 
t
e
x
t
-
r
e
d
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
r
e
d
-
3
0
0
 
m
t
-
1
"
>
F
a
i
l
e
d
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
R
o
w
-
l
e
v
e
l
 
r
e
s
u
l
t
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
g
r
a
y
-
9
0
0
 
r
o
u
n
d
e
d
-
x
l
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
a
y
-
1
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
g
r
a
y
-
8
0
0
 
o
v
e
r
f
l
o
w
-
h
i
d
d
e
n
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
p
x
-
5
 
p
y
-
3
 
b
o
r
d
e
r
-
b
 
b
o
r
d
e
r
-
g
r
a
y
-
1
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
g
r
a
y
-
8
0
0
 
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
j
u
s
t
i
f
y
-
b
e
t
w
e
e
n
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
f
o
n
t
-
s
e
m
i
b
o
l
d
 
t
e
x
t
-
g
r
a
y
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
3
0
0
"
>
I
m
p
o
r
t
 
R
e
s
u
l
t
s
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
L
i
n
k


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
o
=
{
`
/
r
e
c
r
u
i
t
e
r
s
/
j
o
b
s
/
$
{
j
o
b
I
d
}
/
a
p
p
l
i
c
a
t
i
o
n
s
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
x
s
 
f
o
n
t
-
m
e
d
i
u
m
 
t
e
x
t
-
g
r
a
y
-
5
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
4
0
0
 
h
o
v
e
r
:
t
e
x
t
-
b
l
a
c
k
 
d
a
r
k
:
h
o
v
e
r
:
t
e
x
t
-
w
h
i
t
e
 
n
o
-
u
n
d
e
r
l
i
n
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
V
i
e
w
 
A
p
p
l
i
c
a
t
i
o
n
s
 
→


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
d
i
v
i
d
e
-
y
 
d
i
v
i
d
e
-
g
r
a
y
-
5
0
 
d
a
r
k
:
d
i
v
i
d
e
-
g
r
a
y
-
8
0
0
 
m
a
x
-
h
-
7
2
 
o
v
e
r
f
l
o
w
-
y
-
a
u
t
o
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
e
s
u
l
t
s
.
m
a
p
(
(
r
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
k
e
y
=
{
r
.
r
o
w
}
 
c
l
a
s
s
N
a
m
e
=
"
p
x
-
5
 
p
y
-
3
 
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
3
 
t
e
x
t
-
s
m
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
.
s
t
a
t
u
s
 
=
=
=
 
"
s
u
c
c
e
s
s
"
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
h
e
c
k
C
i
r
c
l
e
2
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
 
t
e
x
t
-
g
r
e
e
n
-
5
0
0
 
f
l
e
x
-
s
h
r
i
n
k
-
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
r
.
s
t
a
t
u
s
 
=
=
=
 
"
d
u
p
l
i
c
a
t
e
"
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
A
l
e
r
t
C
i
r
c
l
e
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
 
t
e
x
t
-
a
m
b
e
r
-
5
0
0
 
f
l
e
x
-
s
h
r
i
n
k
-
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
X
C
i
r
c
l
e
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
 
t
e
x
t
-
r
e
d
-
5
0
0
 
f
l
e
x
-
s
h
r
i
n
k
-
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
-
1
 
m
i
n
-
w
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
f
o
n
t
-
m
e
d
i
u
m
 
t
e
x
t
-
g
r
a
y
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
w
h
i
t
e
 
t
r
u
n
c
a
t
e
"
>
{
r
.
n
a
m
e
}
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
x
s
 
t
e
x
t
-
g
r
a
y
-
5
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
4
0
0
"
>
{
r
.
e
m
a
i
l
}
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
.
m
e
s
s
a
g
e
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
x
s
 
t
e
x
t
-
g
r
a
y
-
4
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
5
0
0
 
t
e
x
t
-
r
i
g
h
t
 
f
l
e
x
-
s
h
r
i
n
k
-
0
 
m
a
x
-
w
-
[
2
0
0
p
x
]
 
t
r
u
n
c
a
t
e
"
>
{
r
.
m
e
s
s
a
g
e
}
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
{
`
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
b
o
l
d
 
p
x
-
2
 
p
y
-
0
.
5
 
r
o
u
n
d
e
d
-
f
u
l
l
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
.
s
t
a
t
u
s
 
=
=
=
 
"
s
u
c
c
e
s
s
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
b
g
-
g
r
e
e
n
-
1
0
0
 
d
a
r
k
:
b
g
-
g
r
e
e
n
-
9
0
0
/
3
0
 
t
e
x
t
-
g
r
e
e
n
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
e
e
n
-
4
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
r
.
s
t
a
t
u
s
 
=
=
=
 
"
d
u
p
l
i
c
a
t
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
b
g
-
a
m
b
e
r
-
1
0
0
 
d
a
r
k
:
b
g
-
a
m
b
e
r
-
9
0
0
/
3
0
 
t
e
x
t
-
a
m
b
e
r
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
a
m
b
e
r
-
4
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
b
g
-
r
e
d
-
1
0
0
 
d
a
r
k
:
b
g
-
r
e
d
-
9
0
0
/
3
0
 
t
e
x
t
-
r
e
d
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
r
e
d
-
4
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
.
s
t
a
t
u
s
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
R
e
s
e
t
 
B
u
t
t
o
n
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
{
 
s
e
t
F
i
l
e
(
n
u
l
l
)
;
 
s
e
t
P
r
e
v
i
e
w
(
[
]
)
;
 
s
e
t
R
e
s
u
l
t
s
(
[
]
)
;
 
s
e
t
D
o
n
e
(
f
a
l
s
e
)
;
 
s
e
t
V
a
l
i
d
a
t
i
o
n
E
r
r
o
r
s
(
[
]
)
;
 
s
e
t
P
a
r
s
e
E
r
r
o
r
(
n
u
l
l
)
;
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
w
-
f
u
l
l
 
p
y
-
2
.
5
 
r
o
u
n
d
e
d
-
x
l
 
f
o
n
t
-
b
o
l
d
 
t
e
x
t
-
s
m
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
a
y
-
3
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
g
r
a
y
-
6
0
0
 
t
e
x
t
-
g
r
a
y
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
4
0
0
 
h
o
v
e
r
:
b
g
-
g
r
a
y
-
5
0
 
d
a
r
k
:
h
o
v
e
r
:
b
g
-
g
r
a
y
-
8
0
0
 
t
r
a
n
s
i
t
i
o
n
-
c
o
l
o
r
s
"


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
I
m
p
o
r
t
 
A
n
o
t
h
e
r
 
F
i
l
e


 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>


 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
<
/
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
>


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}


