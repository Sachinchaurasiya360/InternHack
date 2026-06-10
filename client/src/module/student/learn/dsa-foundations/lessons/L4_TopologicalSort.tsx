
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
M
e
m
o
,
 
u
s
e
S
t
a
t
e
 
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
 
B
o
o
k
O
p
e
n
,
 
C
o
d
e
2
,
 
L
i
g
h
t
b
u
l
b
,
 
P
l
a
y
,
 
T
a
r
g
e
t
 
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


 
 
L
e
s
s
o
n
S
h
e
l
l
,


 
 
t
y
p
e
 
L
e
s
s
o
n
Q
u
i
z
Q
u
e
s
t
i
o
n
,


 
 
t
y
p
e
 
L
e
s
s
o
n
T
a
b
D
e
f
,


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
d
s
a
-
t
h
e
o
r
y
/
L
e
s
s
o
n
S
h
e
l
l
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
l
g
o
C
a
n
v
a
s
,


 
 
I
n
p
u
t
E
d
i
t
o
r
,


 
 
P
s
e
u
d
o
c
o
d
e
P
a
n
e
l
,


 
 
u
s
e
S
t
e
p
P
l
a
y
e
r
,


 
 
V
a
r
i
a
b
l
e
s
P
a
n
e
l
,


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
d
s
a
-
t
h
e
o
r
y
/
a
l
g
o
"
;


i
m
p
o
r
t
 
{


 
 
C
a
l
l
o
u
t
,


 
 
C
a
r
d
,


 
 
L
e
d
e
,


 
 
P
i
l
l
B
u
t
t
o
n
,


 
 
S
e
c
t
i
o
n
E
y
e
b
r
o
w
,


 
 
S
e
c
t
i
o
n
T
i
t
l
e
,


 
 
S
u
b
H
e
a
d
i
n
g
,


 
 
T
H
E
M
E
,


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
d
s
a
-
t
h
e
o
r
y
/
p
r
i
m
i
t
i
v
e
s
"
;


i
m
p
o
r
t
 
{
 
P
r
a
c
t
i
c
e
T
a
b
 
}
 
f
r
o
m
 
"
.
.
/
P
r
a
c
t
i
c
e
T
a
b
"
;




c
o
n
s
t
 
P
R
A
C
T
I
C
E
_
T
O
P
I
C
_
S
L
U
G
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
 
=
 
"
g
r
a
p
h
"
;




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
P
a
r
s
e
 
d
i
r
e
c
t
e
d
 
e
d
g
e
s
 
 
A
>
B
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




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
D
i
r
e
c
t
e
d
(
i
n
p
u
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
 
i
d
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
 
e
d
g
e
s
:
 
{
 
f
r
o
m
:
 
s
t
r
i
n
g
;
 
t
o
:
 
s
t
r
i
n
g
 
}
[
]
 
}
 
|
 
n
u
l
l
 
{


 
 
c
o
n
s
t
 
t
o
k
e
n
s
 
=
 
i
n
p
u
t
.
s
p
l
i
t
(
/
[
,
\
s
]
+
/
)
.
m
a
p
(
(
t
)
 
=
>
 
t
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
;


 
 
i
f
 
(
t
o
k
e
n
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
 
n
u
l
l
;


 
 
c
o
n
s
t
 
e
d
g
e
s
:
 
{
 
f
r
o
m
:
 
s
t
r
i
n
g
;
 
t
o
:
 
s
t
r
i
n
g
 
}
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
 
i
d
s
 
=
 
n
e
w
 
S
e
t
<
s
t
r
i
n
g
>
(
)
;


 
 
f
o
r
 
(
c
o
n
s
t
 
t
o
k
 
o
f
 
t
o
k
e
n
s
)
 
{


 
 
 
 
c
o
n
s
t
 
m
 
=
 
t
o
k
.
m
a
t
c
h
(
/
^
(
[
A
-
Z
a
-
z
0
-
9
_
]
+
)
>
(
[
A
-
Z
a
-
z
0
-
9
_
]
+
)
$
/
)
;


 
 
 
 
i
f
 
(
!
m
)
 
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


 
 
 
 
e
d
g
e
s
.
p
u
s
h
(
{
 
f
r
o
m
:
 
m
[
1
]
,
 
t
o
:
 
m
[
2
]
 
}
)
;


 
 
 
 
i
d
s
.
a
d
d
(
m
[
1
]
)
;


 
 
 
 
i
d
s
.
a
d
d
(
m
[
2
]
)
;


 
 
}


 
 
r
e
t
u
r
n
 
{
 
i
d
s
:
 
[
.
.
.
i
d
s
]
.
s
o
r
t
(
)
,
 
e
d
g
e
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
 
a
u
t
o
L
a
y
o
u
t
(
i
d
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
,
 
c
x
 
=
 
3
0
0
,
 
c
y
 
=
 
1
5
0
,
 
r
 
=
 
1
1
0
)
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
 
{
 
x
:
 
n
u
m
b
e
r
;
 
y
:
 
n
u
m
b
e
r
 
}
>
 
{


 
 
c
o
n
s
t
 
o
u
t
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
 
{
 
x
:
 
n
u
m
b
e
r
;
 
y
:
 
n
u
m
b
e
r
 
}
>
 
=
 
{
}
;


 
 
c
o
n
s
t
 
n
 
=
 
i
d
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
d
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
i
d
,
 
i
)
 
=
>
 
{


 
 
 
 
c
o
n
s
t
 
a
n
g
 
=
 
(
2
 
*
 
M
a
t
h
.
P
I
 
*
 
i
)
 
/
 
M
a
t
h
.
m
a
x
(
1
,
 
n
)
 
-
 
M
a
t
h
.
P
I
 
/
 
2
;


 
 
 
 
o
u
t
[
i
d
]
 
=
 
{
 
x
:
 
c
x
 
+
 
r
 
*
 
M
a
t
h
.
c
o
s
(
a
n
g
)
,
 
y
:
 
c
y
 
+
 
r
 
*
 
M
a
t
h
.
s
i
n
(
a
n
g
)
 
}
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
u
t
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
K
a
h
n
 
f
r
a
m
e
 
b
u
i
l
d
e
r
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




t
y
p
e
 
N
o
d
e
S
t
a
t
e
 
=
 
"
d
e
f
a
u
l
t
"
 
|
 
"
f
r
o
n
t
i
e
r
"
 
|
 
"
d
o
n
e
"
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
 
K
a
h
n
F
r
a
m
e
 
{


 
 
l
i
n
e
:
 
n
u
m
b
e
r
;


 
 
v
a
r
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
 
|
 
n
u
m
b
e
r
 
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
>
;


 
 
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
r
i
n
g
;


 
 
n
o
d
e
S
t
a
t
e
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
 
N
o
d
e
S
t
a
t
e
>
;


 
 
e
d
g
e
T
r
e
e
:
 
S
e
t
<
s
t
r
i
n
g
>
;


 
 
i
n
D
e
g
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
 
n
u
m
b
e
r
>
;


 
 
q
u
e
u
e
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


 
 
o
u
t
p
u
t
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


 
 
c
y
c
l
e
?
:
 
b
o
o
l
e
a
n
;


 
 
f
l
a
s
h
K
e
y
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




c
o
n
s
t
 
K
A
H
N
_
P
S
E
U
D
O
 
=
 
[


 
 
"
K
a
h
n
(
G
)
:
"
,


 
 
"
 
 
c
o
m
p
u
t
e
 
i
n
-
d
e
g
r
e
e
 
o
f
 
e
v
e
r
y
 
v
e
r
t
e
x
"
,


 
 
"
 
 
Q
 
←
 
a
l
l
 
v
e
r
t
i
c
e
s
 
w
i
t
h
 
i
n
-
d
e
g
r
e
e
 
=
 
0
"
,


 
 
"
 
 
o
u
t
p
u
t
 
←
 
[
]
"
,


 
 
"
 
 
w
h
i
l
e
 
Q
 
n
o
t
 
e
m
p
t
y
:
"
,


 
 
"
 
 
 
 
u
 
←
 
d
e
q
u
e
u
e
(
Q
)
;
 
o
u
t
p
u
t
.
a
p
p
e
n
d
(
u
)
"
,


 
 
"
 
 
 
 
f
o
r
 
e
a
c
h
 
n
e
i
g
h
b
o
r
 
v
 
o
f
 
u
:
"
,


 
 
"
 
 
 
 
 
 
i
n
D
e
g
[
v
]
 
-
=
 
1
"
,


 
 
"
 
 
 
 
 
 
i
f
 
i
n
D
e
g
[
v
]
 
=
 
0
:
 
e
n
q
u
e
u
e
(
Q
,
 
v
)
"
,


 
 
"
 
 
i
f
 
|
o
u
t
p
u
t
|
 
<
 
|
V
|
:
 
C
Y
C
L
E
 
(
n
o
t
 
a
 
D
A
G
)
"
,


]
;




f
u
n
c
t
i
o
n
 
b
u
i
l
d
K
a
h
n
F
r
a
m
e
s
(
i
d
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
,
 
e
d
g
e
s
:
 
{
 
f
r
o
m
:
 
s
t
r
i
n
g
;
 
t
o
:
 
s
t
r
i
n
g
 
}
[
]
)
:
 
K
a
h
n
F
r
a
m
e
[
]
 
{


 
 
c
o
n
s
t
 
f
:
 
K
a
h
n
F
r
a
m
e
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
 
a
d
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
[
]
>
 
=
 
O
b
j
e
c
t
.
f
r
o
m
E
n
t
r
i
e
s
(
i
d
s
.
m
a
p
(
(
i
d
)
 
=
>
 
[
i
d
,
 
[
]
]
)
)
;


 
 
c
o
n
s
t
 
i
n
D
e
g
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
 
n
u
m
b
e
r
>
 
=
 
O
b
j
e
c
t
.
f
r
o
m
E
n
t
r
i
e
s
(
i
d
s
.
m
a
p
(
(
i
d
)
 
=
>
 
[
i
d
,
 
0
]
)
)
;


 
 
f
o
r
 
(
c
o
n
s
t
 
e
 
o
f
 
e
d
g
e
s
)
 
{
 
a
d
j
[
e
.
f
r
o
m
]
.
p
u
s
h
(
e
.
t
o
)
;
 
i
n
D
e
g
[
e
.
t
o
]
 
=
 
(
i
n
D
e
g
[
e
.
t
o
]
 
?
?
 
0
)
 
+
 
1
;
 
}


 
 
f
o
r
 
(
c
o
n
s
t
 
i
d
 
o
f
 
i
d
s
)
 
a
d
j
[
i
d
]
.
s
o
r
t
(
)
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
e
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
 
N
o
d
e
S
t
a
t
e
>
 
=
 
O
b
j
e
c
t
.
f
r
o
m
E
n
t
r
i
e
s
(
i
d
s
.
m
a
p
(
(
i
d
)
 
=
>
 
[
i
d
,
 
"
d
e
f
a
u
l
t
"
]
)
)
;


 
 
c
o
n
s
t
 
e
d
g
e
T
r
e
e
 
=
 
n
e
w
 
S
e
t
<
s
t
r
i
n
g
>
(
)
;


 
 
c
o
n
s
t
 
o
u
t
p
u
t
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
 
Q
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
 
i
d
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
i
d
)
 
=
>
 
i
n
D
e
g
[
i
d
]
 
=
=
=
 
0
)
.
s
o
r
t
(
)
;


 
 
f
o
r
 
(
c
o
n
s
t
 
i
d
 
o
f
 
Q
)
 
s
t
a
t
e
[
i
d
]
 
=
 
"
f
r
o
n
t
i
e
r
"
;




 
 
c
o
n
s
t
 
c
l
o
n
e
 
=
 
(
p
a
t
c
h
:
 
P
a
r
t
i
a
l
<
K
a
h
n
F
r
a
m
e
>
)
:
 
K
a
h
n
F
r
a
m
e
 
=
>
 
(
{


 
 
 
 
l
i
n
e
:
 
p
a
t
c
h
.
l
i
n
e
 
?
?
 
0
,


 
 
 
 
v
a
r
s
:
 
p
a
t
c
h
.
v
a
r
s
 
?
?
 
{
}
,


 
 
 
 
m
e
s
s
a
g
e
:
 
p
a
t
c
h
.
m
e
s
s
a
g
e
 
?
?
 
"
"
,


 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
{
 
.
.
.
s
t
a
t
e
 
}
,


 
 
 
 
e
d
g
e
T
r
e
e
:
 
n
e
w
 
S
e
t
(
e
d
g
e
T
r
e
e
)
,


 
 
 
 
i
n
D
e
g
:
 
{
 
.
.
.
i
n
D
e
g
 
}
,


 
 
 
 
q
u
e
u
e
:
 
[
.
.
.
Q
]
,


 
 
 
 
o
u
t
p
u
t
:
 
[
.
.
.
o
u
t
p
u
t
]
,


 
 
 
 
c
y
c
l
e
:
 
p
a
t
c
h
.
c
y
c
l
e
,


 
 
 
 
f
l
a
s
h
K
e
y
:
 
p
a
t
c
h
.
f
l
a
s
h
K
e
y
,


 
 
}
)
;




 
 
f
.
p
u
s
h
(
c
l
o
n
e
(
{
 
l
i
n
e
:
 
1
,
 
m
e
s
s
a
g
e
:
 
"
C
o
m
p
u
t
e
 
i
n
-
d
e
g
r
e
e
s
.
"
 
}
)
)
;


 
 
f
.
p
u
s
h
(
c
l
o
n
e
(
{
 
l
i
n
e
:
 
2
,
 
m
e
s
s
a
g
e
:
 
`
I
n
i
t
i
a
l
 
q
u
e
u
e
 
=
 
$
{
Q
.
l
e
n
g
t
h
 
?
 
Q
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
 
:
 
"
(
n
o
n
e
)
"
}
 
(
a
l
l
 
n
o
d
e
s
 
w
i
t
h
 
i
n
-
d
e
g
r
e
e
 
0
)
.
`
 
}
)
)
;




 
 
w
h
i
l
e
 
(
Q
.
l
e
n
g
t
h
)
 
{


 
 
 
 
c
o
n
s
t
 
u
 
=
 
Q
.
s
h
i
f
t
(
)
!
;


 
 
 
 
s
t
a
t
e
[
u
]
 
=
 
"
d
o
n
e
"
;


 
 
 
 
o
u
t
p
u
t
.
p
u
s
h
(
u
)
;


 
 
 
 
f
.
p
u
s
h
(
c
l
o
n
e
(
{
 
l
i
n
e
:
 
5
,
 
m
e
s
s
a
g
e
:
 
`
D
e
q
u
e
u
e
 
$
{
u
}
.
 
A
p
p
e
n
d
 
t
o
 
o
u
t
p
u
t
.
`
,
 
v
a
r
s
:
 
{
 
u
,
 
"
|
o
u
t
p
u
t
|
"
:
 
o
u
t
p
u
t
.
l
e
n
g
t
h
 
}
,
 
f
l
a
s
h
K
e
y
:
 
u
 
}
)
)
;




 
 
 
 
f
o
r
 
(
c
o
n
s
t
 
v
 
o
f
 
a
d
j
[
u
]
)
 
{


 
 
 
 
 
 
i
n
D
e
g
[
v
]
 
-
=
 
1
;


 
 
 
 
 
 
e
d
g
e
T
r
e
e
.
a
d
d
(
`
$
{
u
}
-
$
{
v
}
`
)
;


 
 
 
 
 
 
f
.
p
u
s
h
(
c
l
o
n
e
(
{
 
l
i
n
e
:
 
7
,
 
m
e
s
s
a
g
e
:
 
`
D
e
c
r
e
m
e
n
t
 
i
n
-
d
e
g
r
e
e
 
o
f
 
$
{
v
}
:
 
n
o
w
 
$
{
i
n
D
e
g
[
v
]
}
.
`
,
 
v
a
r
s
:
 
{
 
u
,
 
v
,
 
"
i
n
D
e
g
[
v
]
"
:
 
i
n
D
e
g
[
v
]
 
}
 
}
)
)
;


 
 
 
 
 
 
i
f
 
(
i
n
D
e
g
[
v
]
 
=
=
=
 
0
)
 
{


 
 
 
 
 
 
 
 
Q
.
p
u
s
h
(
v
)
;


 
 
 
 
 
 
 
 
s
t
a
t
e
[
v
]
 
=
 
"
f
r
o
n
t
i
e
r
"
;


 
 
 
 
 
 
 
 
f
.
p
u
s
h
(
c
l
o
n
e
(
{
 
l
i
n
e
:
 
8
,
 
m
e
s
s
a
g
e
:
 
`
i
n
-
d
e
g
r
e
e
[
$
{
v
}
]
 
h
i
t
 
0
,
 
e
n
q
u
e
u
e
.
`
,
 
f
l
a
s
h
K
e
y
:
 
v
,
 
v
a
r
s
:
 
{
 
u
,
 
v
 
}
 
}
)
)
;


 
 
 
 
 
 
}


 
 
 
 
}


 
 
}




 
 
c
o
n
s
t
 
i
s
C
y
c
l
e
 
=
 
o
u
t
p
u
t
.
l
e
n
g
t
h
 
<
 
i
d
s
.
l
e
n
g
t
h
;


 
 
f
.
p
u
s
h
(
c
l
o
n
e
(
{


 
 
 
 
l
i
n
e
:
 
9
,


 
 
 
 
m
e
s
s
a
g
e
:
 
i
s
C
y
c
l
e


 
 
 
 
 
 
?
 
`
|
o
u
t
p
u
t
|
 
=
 
$
{
o
u
t
p
u
t
.
l
e
n
g
t
h
}
 
<
 
|
V
|
 
=
 
$
{
i
d
s
.
l
e
n
g
t
h
}
,
 
C
Y
C
L
E
 
d
e
t
e
c
t
e
d
,
 
n
o
t
 
a
 
D
A
G
.
`


 
 
 
 
 
 
:
 
`
A
l
l
 
$
{
i
d
s
.
l
e
n
g
t
h
}
 
v
e
r
t
i
c
e
s
 
o
u
t
p
u
t
.
 
T
o
p
o
l
o
g
i
c
a
l
 
o
r
d
e
r
:
 
$
{
o
u
t
p
u
t
.
j
o
i
n
(
"
 
→
 
"
)
}
.
`
,


 
 
 
 
c
y
c
l
e
:
 
i
s
C
y
c
l
e
,


 
 
}
)
)
;


 
 
r
e
t
u
r
n
 
f
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
D
F
S
 
t
o
p
o
 
f
r
a
m
e
 
b
u
i
l
d
e
r
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




t
y
p
e
 
D
F
S
C
o
l
o
r
 
=
 
"
W
"
 
|
 
"
G
"
 
|
 
"
B
"
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
 
D
F
S
T
o
p
o
F
r
a
m
e
 
{


 
 
l
i
n
e
:
 
n
u
m
b
e
r
;


 
 
v
a
r
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
 
|
 
n
u
m
b
e
r
 
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
>
;


 
 
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
r
i
n
g
;


 
 
n
o
d
e
S
t
a
t
e
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
 
N
o
d
e
S
t
a
t
e
>
;


 
 
e
d
g
e
T
r
e
e
:
 
S
e
t
<
s
t
r
i
n
g
>
;


 
 
e
d
g
e
B
a
c
k
:
 
S
e
t
<
s
t
r
i
n
g
>
;


 
 
s
t
a
c
k
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


 
 
o
u
t
p
u
t
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


 
 
c
y
c
l
e
?
:
 
b
o
o
l
e
a
n
;


 
 
f
l
a
s
h
K
e
y
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




c
o
n
s
t
 
D
F
S
_
P
S
E
U
D
O
 
=
 
[


 
 
"
D
F
S
-
T
o
p
o
(
G
)
:
"
,


 
 
"
 
 
s
t
a
c
k
 
←
 
e
m
p
t
y
"
,


 
 
"
 
 
f
o
r
 
e
a
c
h
 
v
:
 
c
o
l
o
r
[
v
]
 
←
 
W
H
I
T
E
"
,


 
 
"
 
 
f
o
r
 
e
a
c
h
 
v
 
i
n
 
V
:
"
,


 
 
"
 
 
 
 
i
f
 
c
o
l
o
r
[
v
]
 
=
 
W
H
I
T
E
:
 
D
F
S
-
V
i
s
i
t
(
v
)
"
,


 
 
"
D
F
S
-
V
i
s
i
t
(
u
)
:
"
,


 
 
"
 
 
c
o
l
o
r
[
u
]
 
←
 
G
R
A
Y
"
,


 
 
"
 
 
f
o
r
 
e
a
c
h
 
n
e
i
g
h
b
o
r
 
v
 
o
f
 
u
:
"
,


 
 
"
 
 
 
 
i
f
 
c
o
l
o
r
[
v
]
 
=
 
G
R
A
Y
:
 
r
e
p
o
r
t
 
C
Y
C
L
E
"
,


 
 
"
 
 
 
 
e
l
i
f
 
c
o
l
o
r
[
v
]
 
=
 
W
H
I
T
E
:
 
D
F
S
-
V
i
s
i
t
(
v
)
"
,


 
 
"
 
 
c
o
l
o
r
[
u
]
 
←
 
B
L
A
C
K
"
,


 
 
"
 
 
p
u
s
h
 
u
 
o
n
t
o
 
s
t
a
c
k
"
,


 
 
"
/
/
 
T
o
p
o
 
o
r
d
e
r
 
=
 
s
t
a
c
k
 
p
o
p
p
e
d
 
t
o
p
-
t
o
-
b
o
t
t
o
m
"
,


]
;




f
u
n
c
t
i
o
n
 
b
u
i
l
d
D
F
S
T
o
p
o
F
r
a
m
e
s
(
i
d
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
,
 
e
d
g
e
s
:
 
{
 
f
r
o
m
:
 
s
t
r
i
n
g
;
 
t
o
:
 
s
t
r
i
n
g
 
}
[
]
)
:
 
D
F
S
T
o
p
o
F
r
a
m
e
[
]
 
{


 
 
c
o
n
s
t
 
f
:
 
D
F
S
T
o
p
o
F
r
a
m
e
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
 
a
d
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
[
]
>
 
=
 
O
b
j
e
c
t
.
f
r
o
m
E
n
t
r
i
e
s
(
i
d
s
.
m
a
p
(
(
i
d
)
 
=
>
 
[
i
d
,
 
[
]
]
)
)
;


 
 
f
o
r
 
(
c
o
n
s
t
 
e
 
o
f
 
e
d
g
e
s
)
 
a
d
j
[
e
.
f
r
o
m
]
.
p
u
s
h
(
e
.
t
o
)
;


 
 
f
o
r
 
(
c
o
n
s
t
 
i
d
 
o
f
 
i
d
s
)
 
a
d
j
[
i
d
]
.
s
o
r
t
(
)
;




 
 
c
o
n
s
t
 
c
o
l
o
r
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
 
D
F
S
C
o
l
o
r
>
 
=
 
O
b
j
e
c
t
.
f
r
o
m
E
n
t
r
i
e
s
(
i
d
s
.
m
a
p
(
(
i
d
)
 
=
>
 
[
i
d
,
 
"
W
"
]
)
)
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
e
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
 
N
o
d
e
S
t
a
t
e
>
 
=
 
O
b
j
e
c
t
.
f
r
o
m
E
n
t
r
i
e
s
(
i
d
s
.
m
a
p
(
(
i
d
)
 
=
>
 
[
i
d
,
 
"
d
e
f
a
u
l
t
"
]
)
)
;


 
 
c
o
n
s
t
 
e
d
g
e
T
r
e
e
 
=
 
n
e
w
 
S
e
t
<
s
t
r
i
n
g
>
(
)
;


 
 
c
o
n
s
t
 
e
d
g
e
B
a
c
k
 
=
 
n
e
w
 
S
e
t
<
s
t
r
i
n
g
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
n
i
s
h
S
t
a
c
k
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


 
 
l
e
t
 
h
a
s
C
y
c
l
e
 
=
 
f
a
l
s
e
;




 
 
c
o
n
s
t
 
c
l
o
n
e
 
=
 
(
p
a
t
c
h
:
 
P
a
r
t
i
a
l
<
D
F
S
T
o
p
o
F
r
a
m
e
>
)
:
 
D
F
S
T
o
p
o
F
r
a
m
e
 
=
>
 
(
{


 
 
 
 
l
i
n
e
:
 
p
a
t
c
h
.
l
i
n
e
 
?
?
 
0
,


 
 
 
 
v
a
r
s
:
 
p
a
t
c
h
.
v
a
r
s
 
?
?
 
{
}
,


 
 
 
 
m
e
s
s
a
g
e
:
 
p
a
t
c
h
.
m
e
s
s
a
g
e
 
?
?
 
"
"
,


 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
{
 
.
.
.
s
t
a
t
e
 
}
,


 
 
 
 
e
d
g
e
T
r
e
e
:
 
n
e
w
 
S
e
t
(
e
d
g
e
T
r
e
e
)
,


 
 
 
 
e
d
g
e
B
a
c
k
:
 
n
e
w
 
S
e
t
(
e
d
g
e
B
a
c
k
)
,


 
 
 
 
s
t
a
c
k
:
 
[
.
.
.
f
i
n
i
s
h
S
t
a
c
k
]
,


 
 
 
 
o
u
t
p
u
t
:
 
p
a
t
c
h
.
o
u
t
p
u
t
 
?
?
 
[
]
,


 
 
 
 
c
y
c
l
e
:
 
p
a
t
c
h
.
c
y
c
l
e
 
?
?
 
h
a
s
C
y
c
l
e
,


 
 
 
 
f
l
a
s
h
K
e
y
:
 
p
a
t
c
h
.
f
l
a
s
h
K
e
y
,


 
 
}
)
;




 
 
f
.
p
u
s
h
(
c
l
o
n
e
(
{
 
l
i
n
e
:
 
1
,
 
m
e
s
s
a
g
e
:
 
"
I
n
i
t
i
a
l
i
z
e
 
s
t
a
c
k
 
=
 
[
]
,
 
a
l
l
 
v
e
r
t
i
c
e
s
 
W
H
I
T
E
.
"
 
}
)
)
;




 
 
f
u
n
c
t
i
o
n
 
v
i
s
i
t
(
u
:
 
s
t
r
i
n
g
)
 
{


 
 
 
 
c
o
l
o
r
[
u
]
 
=
 
"
G
"
;


 
 
 
 
s
t
a
t
e
[
u
]
 
=
 
"
f
r
o
n
t
i
e
r
"
 
a
s
 
N
o
d
e
S
t
a
t
e
;


 
 
 
 
f
.
p
u
s
h
(
c
l
o
n
e
(
{
 
l
i
n
e
:
 
6
,
 
m
e
s
s
a
g
e
:
 
`
D
F
S
-
V
i
s
i
t
(
$
{
u
}
)
.
 
C
o
l
o
r
 
G
R
A
Y
.
`
,
 
f
l
a
s
h
K
e
y
:
 
u
,
 
v
a
r
s
:
 
{
 
u
 
}
 
}
)
)
;


 
 
 
 
f
o
r
 
(
c
o
n
s
t
 
v
 
o
f
 
a
d
j
[
u
]
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
k
 
=
 
`
$
{
u
}
-
$
{
v
}
`
;


 
 
 
 
 
 
f
.
p
u
s
h
(
c
l
o
n
e
(
{
 
l
i
n
e
:
 
7
,
 
m
e
s
s
a
g
e
:
 
`
L
o
o
k
 
a
t
 
e
d
g
e
 
$
{
u
}
→
$
{
v
}
.
`
,
 
v
a
r
s
:
 
{
 
u
,
 
v
 
}
 
}
)
)
;


 
 
 
 
 
 
i
f
 
(
c
o
l
o
r
[
v
]
 
=
=
=
 
"
G
"
)
 
{


 
 
 
 
 
 
 
 
h
a
s
C
y
c
l
e
 
=
 
t
r
u
e
;


 
 
 
 
 
 
 
 
e
d
g
e
B
a
c
k
.
a
d
d
(
k
)
;


 
 
 
 
 
 
 
 
f
.
p
u
s
h
(
c
l
o
n
e
(
{
 
l
i
n
e
:
 
8
,
 
m
e
s
s
a
g
e
:
 
`
$
{
v
}
 
i
s
 
G
R
A
Y
,
 
b
a
c
k
 
e
d
g
e
 
→
 
C
Y
C
L
E
.
 
G
r
a
p
h
 
i
s
 
N
O
T
 
a
 
D
A
G
.
`
,
 
c
y
c
l
e
:
 
t
r
u
e
,
 
v
a
r
s
:
 
{
 
u
,
 
v
 
}
 
}
)
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
 
e
l
s
e
 
i
f
 
(
c
o
l
o
r
[
v
]
 
=
=
=
 
"
W
"
)
 
{


 
 
 
 
 
 
 
 
e
d
g
e
T
r
e
e
.
a
d
d
(
k
)
;


 
 
 
 
 
 
 
 
v
i
s
i
t
(
v
)
;


 
 
 
 
 
 
 
 
i
f
 
(
h
a
s
C
y
c
l
e
)
 
r
e
t
u
r
n
;


 
 
 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
 
 
f
.
p
u
s
h
(
c
l
o
n
e
(
{
 
l
i
n
e
:
 
7
,
 
m
e
s
s
a
g
e
:
 
`
$
{
v
}
 
i
s
 
B
L
A
C
K
,
 
a
l
r
e
a
d
y
 
f
i
n
i
s
h
e
d
,
 
s
k
i
p
.
`
,
 
v
a
r
s
:
 
{
 
u
,
 
v
 
}
 
}
)
)
;


 
 
 
 
 
 
}


 
 
 
 
}


 
 
 
 
c
o
l
o
r
[
u
]
 
=
 
"
B
"
;


 
 
 
 
s
t
a
t
e
[
u
]
 
=
 
"
d
o
n
e
"
;


 
 
 
 
f
i
n
i
s
h
S
t
a
c
k
.
p
u
s
h
(
u
)
;


 
 
 
 
f
.
p
u
s
h
(
c
l
o
n
e
(
{
 
l
i
n
e
:
 
1
1
,
 
m
e
s
s
a
g
e
:
 
`
F
i
n
i
s
h
 
$
{
u
}
.
 
P
u
s
h
 
o
n
t
o
 
s
t
a
c
k
.
`
,
 
f
l
a
s
h
K
e
y
:
 
u
,
 
v
a
r
s
:
 
{
 
u
 
}
 
}
)
)
;


 
 
}




 
 
f
o
r
 
(
c
o
n
s
t
 
v
 
o
f
 
i
d
s
)
 
{


 
 
 
 
i
f
 
(
c
o
l
o
r
[
v
]
 
=
=
=
 
"
W
"
)
 
{


 
 
 
 
 
 
v
i
s
i
t
(
v
)
;


 
 
 
 
 
 
i
f
 
(
h
a
s
C
y
c
l
e
)
 
b
r
e
a
k
;


 
 
 
 
}


 
 
}




 
 
i
f
 
(
!
h
a
s
C
y
c
l
e
)
 
{


 
 
 
 
c
o
n
s
t
 
t
o
p
o
 
=
 
[
.
.
.
f
i
n
i
s
h
S
t
a
c
k
]
.
r
e
v
e
r
s
e
(
)
;


 
 
 
 
f
.
p
u
s
h
(
c
l
o
n
e
(
{
 
l
i
n
e
:
 
1
2
,
 
m
e
s
s
a
g
e
:
 
`
A
l
l
 
d
o
n
e
.
 
T
o
p
o
l
o
g
i
c
a
l
 
o
r
d
e
r
 
=
 
$
{
t
o
p
o
.
j
o
i
n
(
"
 
→
 
"
)
}
.
`
,
 
o
u
t
p
u
t
:
 
t
o
p
o
 
}
)
)
;


 
 
}


 
 
r
e
t
u
r
n
 
f
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
I
n
l
i
n
e
 
g
r
a
p
h
 
S
V
G
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




c
o
n
s
t
 
N
O
D
E
_
S
T
A
T
E
_
C
O
L
O
R
:
 
R
e
c
o
r
d
<
N
o
d
e
S
t
a
t
e
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


 
 
d
e
f
a
u
l
t
:
 
T
H
E
M
E
.
t
e
x
t
M
u
t
e
d
,


 
 
f
r
o
n
t
i
e
r
:
 
"
#
3
b
8
2
f
6
"
,


 
 
d
o
n
e
:
 
"
#
1
0
b
9
8
1
"
,


}
;




f
u
n
c
t
i
o
n
 
G
r
a
p
h
S
V
G
(
{


 
 
i
d
s
,


 
 
e
d
g
e
s
,


 
 
p
o
s
,


 
 
f
r
a
m
e
,


}
:
 
{


 
 
i
d
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


 
 
e
d
g
e
s
:
 
{
 
f
r
o
m
:
 
s
t
r
i
n
g
;
 
t
o
:
 
s
t
r
i
n
g
 
}
[
]
;


 
 
p
o
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
 
{
 
x
:
 
n
u
m
b
e
r
;
 
y
:
 
n
u
m
b
e
r
 
}
>
;


 
 
f
r
a
m
e
:
 
K
a
h
n
F
r
a
m
e
 
|
 
D
F
S
T
o
p
o
F
r
a
m
e
;


 
 
t
y
p
e
?
:
 
"
k
a
h
n
"
 
|
 
"
d
f
s
"
;


}
)
 
{


 
 
c
o
n
s
t
 
W
 
=
 
6
0
0
;


 
 
c
o
n
s
t
 
H
 
=
 
3
0
0
;


 
 
c
o
n
s
t
 
t
r
e
e
E
d
g
e
s
 
=
 
"
e
d
g
e
T
r
e
e
"
 
i
n
 
f
r
a
m
e
 
?
 
f
r
a
m
e
.
e
d
g
e
T
r
e
e
 
:
 
n
e
w
 
S
e
t
<
s
t
r
i
n
g
>
(
)
;


 
 
c
o
n
s
t
 
b
a
c
k
E
d
g
e
s
 
=
 
"
e
d
g
e
B
a
c
k
"
 
i
n
 
f
r
a
m
e
 
?
 
f
r
a
m
e
.
e
d
g
e
B
a
c
k
 
:
 
n
e
w
 
S
e
t
<
s
t
r
i
n
g
>
(
)
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
w
-
f
u
l
l
 
o
v
e
r
f
l
o
w
-
x
-
a
u
t
o
 
r
o
u
n
d
e
d
-
m
d
 
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
s
t
o
n
e
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
w
h
i
t
e
/
1
0
 
b
g
-
s
t
o
n
e
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
s
t
o
n
e
-
9
5
0
"
>


 
 
 
 
 
 
<
s
v
g
 
w
i
d
t
h
=
{
W
}
 
h
e
i
g
h
t
=
{
H
}
 
v
i
e
w
B
o
x
=
{
`
0
 
0
 
$
{
W
}
 
$
{
H
}
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
b
l
o
c
k
 
m
x
-
a
u
t
o
"
>


 
 
 
 
 
 
 
 
<
d
e
f
s
>


 
 
 
 
 
 
 
 
 
 
<
m
a
r
k
e
r
 
i
d
=
"
a
r
r
-
t
o
p
o
"
 
m
a
r
k
e
r
W
i
d
t
h
=
"
8
"
 
m
a
r
k
e
r
H
e
i
g
h
t
=
"
8
"
 
r
e
f
X
=
"
6
"
 
r
e
f
Y
=
"
3
"
 
o
r
i
e
n
t
=
"
a
u
t
o
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
p
a
t
h
 
d
=
"
M
0
,
0
 
L
0
,
6
 
L
8
,
3
 
z
"
 
f
i
l
l
=
{
T
H
E
M
E
.
b
o
r
d
e
r
}
 
/
>


 
 
 
 
 
 
 
 
 
 
<
/
m
a
r
k
e
r
>


 
 
 
 
 
 
 
 
 
 
<
m
a
r
k
e
r
 
i
d
=
"
a
r
r
-
t
o
p
o
-
t
r
e
e
"
 
m
a
r
k
e
r
W
i
d
t
h
=
"
8
"
 
m
a
r
k
e
r
H
e
i
g
h
t
=
"
8
"
 
r
e
f
X
=
"
6
"
 
r
e
f
Y
=
"
3
"
 
o
r
i
e
n
t
=
"
a
u
t
o
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
p
a
t
h
 
d
=
"
M
0
,
0
 
L
0
,
6
 
L
8
,
3
 
z
"
 
f
i
l
l
=
"
#
f
b
b
f
2
4
"
 
/
>


 
 
 
 
 
 
 
 
 
 
<
/
m
a
r
k
e
r
>


 
 
 
 
 
 
 
 
 
 
<
m
a
r
k
e
r
 
i
d
=
"
a
r
r
-
t
o
p
o
-
b
a
c
k
"
 
m
a
r
k
e
r
W
i
d
t
h
=
"
8
"
 
m
a
r
k
e
r
H
e
i
g
h
t
=
"
8
"
 
r
e
f
X
=
"
6
"
 
r
e
f
Y
=
"
3
"
 
o
r
i
e
n
t
=
"
a
u
t
o
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
p
a
t
h
 
d
=
"
M
0
,
0
 
L
0
,
6
 
L
8
,
3
 
z
"
 
f
i
l
l
=
"
#
e
f
4
4
4
4
"
 
/
>


 
 
 
 
 
 
 
 
 
 
<
/
m
a
r
k
e
r
>


 
 
 
 
 
 
 
 
<
/
d
e
f
s
>


 
 
 
 
 
 
 
 
{
e
d
g
e
s
.
m
a
p
(
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
 
p
1
 
=
 
p
o
s
[
e
.
f
r
o
m
]
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
p
2
 
=
 
p
o
s
[
e
.
t
o
]
;


 
 
 
 
 
 
 
 
 
 
i
f
 
(
!
p
1
 
|
|
 
!
p
2
)
 
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


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
k
 
=
 
`
$
{
e
.
f
r
o
m
}
-
$
{
e
.
t
o
}
`
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
T
r
e
e
 
=
 
t
r
e
e
E
d
g
e
s
.
h
a
s
(
k
)
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
B
a
c
k
 
=
 
b
a
c
k
E
d
g
e
s
.
h
a
s
(
k
)
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
s
t
r
o
k
e
 
=
 
i
s
T
r
e
e
 
?
 
"
#
f
b
b
f
2
4
"
 
:
 
i
s
B
a
c
k
 
?
 
"
#
e
f
4
4
4
4
"
 
:
 
T
H
E
M
E
.
b
o
r
d
e
r
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
m
a
r
k
e
r
R
e
f
 
=
 
i
s
T
r
e
e
 
?
 
"
u
r
l
(
#
a
r
r
-
t
o
p
o
-
t
r
e
e
)
"
 
:
 
i
s
B
a
c
k
 
?
 
"
u
r
l
(
#
a
r
r
-
t
o
p
o
-
b
a
c
k
)
"
 
:
 
"
u
r
l
(
#
a
r
r
-
t
o
p
o
)
"
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
d
x
 
=
 
p
2
.
x
 
-
 
p
1
.
x
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
d
y
 
=
 
p
2
.
y
 
-
 
p
1
.
y
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
l
e
n
 
=
 
M
a
t
h
.
s
q
r
t
(
d
x
 
*
 
d
x
 
+
 
d
y
 
*
 
d
y
)
 
|
|
 
1
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
e
x
 
=
 
p
2
.
x
 
-
 
(
2
2
 
/
 
l
e
n
)
 
*
 
d
x
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
e
y
 
=
 
p
2
.
y
 
-
 
(
2
2
 
/
 
l
e
n
)
 
*
 
d
y
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
s
x
 
=
 
p
1
.
x
 
+
 
(
2
2
 
/
 
l
e
n
)
 
*
 
d
x
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
s
y
 
=
 
p
1
.
y
 
+
 
(
2
2
 
/
 
l
e
n
)
 
*
 
d
y
;


 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
n
e
 
k
e
y
=
{
k
}
 
x
1
=
{
s
x
}
 
y
1
=
{
s
y
}
 
x
2
=
{
e
x
}
 
y
2
=
{
e
y
}
 
s
t
r
o
k
e
=
{
s
t
r
o
k
e
}
 
s
t
r
o
k
e
W
i
d
t
h
=
{
i
s
T
r
e
e
 
|
|
 
i
s
B
a
c
k
 
?
 
2
.
5
 
:
 
1
.
5
}
 
m
a
r
k
e
r
E
n
d
=
{
m
a
r
k
e
r
R
e
f
}
 
/
>


 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
 
 
{
i
d
s
.
m
a
p
(
(
i
d
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
p
 
=
 
p
o
s
[
i
d
]
;


 
 
 
 
 
 
 
 
 
 
i
f
 
(
!
p
)
 
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


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
n
s
 
=
 
f
r
a
m
e
.
n
o
d
e
S
t
a
t
e
s
[
i
d
]
 
?
?
 
"
d
e
f
a
u
l
t
"
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
f
i
l
l
 
=
 
N
O
D
E
_
S
T
A
T
E
_
C
O
L
O
R
[
n
s
]
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
n
D
 
=
 
"
i
n
D
e
g
"
 
i
n
 
f
r
a
m
e
 
?
 
(
f
r
a
m
e
 
a
s
 
K
a
h
n
F
r
a
m
e
)
.
i
n
D
e
g
[
i
d
]
 
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
;


 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
g
 
k
e
y
=
{
i
d
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
c
i
r
c
l
e
 
c
x
=
{
p
.
x
}
 
c
y
=
{
p
.
y
}
 
r
=
{
2
0
}
 
f
i
l
l
=
{
f
i
l
l
}
 
s
t
r
o
k
e
=
{
T
H
E
M
E
.
b
o
r
d
e
r
}
 
s
t
r
o
k
e
W
i
d
t
h
=
{
1
.
5
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
{
p
.
x
}
 
y
=
{
p
.
y
 
+
 
1
}
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"
 
d
o
m
i
n
a
n
t
B
a
s
e
l
i
n
e
=
"
m
i
d
d
l
e
"
 
f
o
n
t
S
i
z
e
=
"
1
3
"
 
f
i
l
l
=
"
#
f
f
f
"
 
f
o
n
t
W
e
i
g
h
t
=
"
7
0
0
"
 
f
o
n
t
F
a
m
i
l
y
=
{
T
H
E
M
E
.
h
e
a
d
i
n
g
}
>
{
i
d
}
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
n
D
 
!
=
=
 
u
n
d
e
f
i
n
e
d
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
{
p
.
x
 
+
 
1
4
}
 
y
=
{
p
.
y
 
-
 
1
4
}
 
f
o
n
t
S
i
z
e
=
"
1
1
"
 
f
i
l
l
=
{
T
H
E
M
E
.
a
c
c
e
n
t
}
 
f
o
n
t
W
e
i
g
h
t
=
"
7
0
0
"
 
f
o
n
t
F
a
m
i
l
y
=
{
T
H
E
M
E
.
m
o
n
o
}
>
{
i
n
D
}
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
g
>


 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
<
/
s
v
g
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




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
S
e
q
u
e
n
c
e
 
d
i
s
p
l
a
y
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
O
u
t
p
u
t
S
e
q
(
{
 
i
t
e
m
s
,
 
t
i
t
l
e
 
}
:
 
{
 
i
t
e
m
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
 
t
i
t
l
e
:
 
s
t
r
i
n
g
 
}
)
 
{


 
 
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
f
l
e
x
 
f
l
e
x
-
c
o
l
 
g
a
p
-
1
.
5
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
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
"
>
{
t
i
t
l
e
}
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
f
l
e
x
 
g
a
p
-
1
.
5
 
f
l
e
x
-
w
r
a
p
 
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
 
m
i
n
-
h
-
8
 
p
x
-
2
 
p
y
-
1
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
m
d
 
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
s
t
o
n
e
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
w
h
i
t
e
/
1
0
 
b
g
-
s
t
o
n
e
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
s
t
o
n
e
-
9
0
0
"
>


 
 
 
 
 
 
 
 
{
i
t
e
m
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
 
?
 
(


 
 
 
 
 
 
 
 
 
 
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
s
t
o
n
e
-
4
0
0
 
i
t
a
l
i
c
"
>
-
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
i
t
e
m
s
.
m
a
p
(
(
i
d
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
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
i
n
l
i
n
e
-
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
"
p
x
-
2
.
5
 
p
y
-
1
 
r
o
u
n
d
e
d
-
m
d
 
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
o
n
o
 
f
o
n
t
-
b
o
l
d
 
b
g
-
l
i
m
e
-
6
0
0
 
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
i
d
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
 
<
 
i
t
e
m
s
.
l
e
n
g
t
h
 
-
 
1
 
&
&
 
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
"
t
e
x
t
-
s
t
o
n
e
-
4
0
0
"
>
→
<
/
s
p
a
n
>
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
)
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


 
 
)
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
 
Q
u
e
u
e
V
i
z
(
{
 
i
t
e
m
s
 
}
:
 
{
 
i
t
e
m
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
 
}
)
 
{


 
 
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
f
l
e
x
 
f
l
e
x
-
c
o
l
 
g
a
p
-
1
.
5
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
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
"
>
/
 
q
u
e
u
e
 
(
i
n
-
d
e
g
 
=
 
0
)
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
f
l
e
x
 
g
a
p
-
1
.
5
 
f
l
e
x
-
w
r
a
p
 
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
 
m
i
n
-
h
-
8
 
p
x
-
2
 
p
y
-
1
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
m
d
 
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
s
t
o
n
e
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
w
h
i
t
e
/
1
0
 
b
g
-
s
t
o
n
e
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
s
t
o
n
e
-
9
0
0
"
>


 
 
 
 
 
 
 
 
{
i
t
e
m
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
 
?
 
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
s
t
o
n
e
-
4
0
0
 
i
t
a
l
i
c
"
>
e
m
p
t
y
<
/
s
p
a
n
>
 
:
 
i
t
e
m
s
.
m
a
p
(
(
v
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
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
{
`
i
n
l
i
n
e
-
b
l
o
c
k
 
p
x
-
2
.
5
 
p
y
-
1
 
r
o
u
n
d
e
d
-
m
d
 
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
o
n
o
 
f
o
n
t
-
b
o
l
d
 
b
o
r
d
e
r
 
$
{
i
 
=
=
=
 
0
 
?
 
"
b
g
-
c
y
a
n
-
5
0
0
 
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
 
b
o
r
d
e
r
-
c
y
a
n
-
5
0
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
c
y
a
n
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
c
y
a
n
-
7
0
0
 
t
e
x
t
-
c
y
a
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
c
y
a
n
-
3
0
0
"
}
`
}
>
{
v
}
<
/
s
p
a
n
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


 
 
)
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
 
S
t
a
c
k
V
i
z
(
{
 
i
t
e
m
s
 
}
:
 
{
 
i
t
e
m
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
 
}
)
 
{


 
 
c
o
n
s
t
 
r
e
v
 
=
 
[
.
.
.
i
t
e
m
s
]
.
r
e
v
e
r
s
e
(
)
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
f
l
e
x
 
f
l
e
x
-
c
o
l
 
g
a
p
-
1
.
5
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
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
"
>
/
 
f
i
n
i
s
h
 
s
t
a
c
k
 
(
t
o
p
 
f
i
r
s
t
)
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
f
l
e
x
 
f
l
e
x
-
c
o
l
 
g
a
p
-
1
 
m
i
n
-
h
-
8
 
p
-
2
 
r
o
u
n
d
e
d
-
m
d
 
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
s
t
o
n
e
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
w
h
i
t
e
/
1
0
 
b
g
-
s
t
o
n
e
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
s
t
o
n
e
-
9
0
0
"
>


 
 
 
 
 
 
 
 
{
r
e
v
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
s
t
o
n
e
-
4
0
0
 
i
t
a
l
i
c
"
>
e
m
p
t
y
<
/
s
p
a
n
>
 
:
 
r
e
v
.
m
a
p
(
(
v
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
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
{
`
i
n
l
i
n
e
-
b
l
o
c
k
 
p
x
-
2
.
5
 
p
y
-
1
 
r
o
u
n
d
e
d
-
m
d
 
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
o
n
o
 
f
o
n
t
-
b
o
l
d
 
b
o
r
d
e
r
 
$
{
i
 
=
=
=
 
0
 
?
 
"
b
g
-
b
l
u
e
-
5
0
0
 
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
 
b
o
r
d
e
r
-
b
l
u
e
-
5
0
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
b
l
u
e
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
b
l
u
e
-
7
0
0
 
t
e
x
t
-
b
l
u
e
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
b
l
u
e
-
3
0
0
"
}
`
}
>
{
v
}
<
/
s
p
a
n
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


 
 
)
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
 
C
y
c
l
e
B
a
n
n
e
r
(
)
 
{


 
 
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
t
-
2
 
p
x
-
4
 
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
m
d
 
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
o
s
e
-
5
0
0
 
b
g
-
r
o
s
e
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
o
s
e
-
5
0
0
/
1
0
 
t
e
x
t
-
r
o
s
e
-
8
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
o
s
e
-
2
0
0
 
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
b
o
l
d
 
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


 
 
 
 
 
 
N
O
T
 
A
 
D
A
G
,
 
t
o
p
o
l
o
g
i
c
a
l
 
o
r
d
e
r
 
d
o
e
s
 
n
o
t
 
e
x
i
s
t
.


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
S
u
b
-
v
i
s
u
a
l
i
z
e
r
s
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
K
a
h
n
V
i
z
(
{
 
i
d
s
,
 
e
d
g
e
s
,
 
i
n
p
u
t
S
t
r
,
 
s
e
t
I
n
p
u
t
S
t
r
 
}
:
 
{


 
 
i
d
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


 
 
e
d
g
e
s
:
 
{
 
f
r
o
m
:
 
s
t
r
i
n
g
;
 
t
o
:
 
s
t
r
i
n
g
 
}
[
]
;


 
 
i
n
p
u
t
S
t
r
:
 
s
t
r
i
n
g
;


 
 
s
e
t
I
n
p
u
t
S
t
r
:
 
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
 
v
o
i
d
;


}
)
 
{


 
 
c
o
n
s
t
 
f
r
a
m
e
s
 
=
 
u
s
e
M
e
m
o
(
(
)
 
=
>
 
b
u
i
l
d
K
a
h
n
F
r
a
m
e
s
(
i
d
s
,
 
e
d
g
e
s
)
,
 
[
i
d
s
,
 
e
d
g
e
s
]
)
;


 
 
c
o
n
s
t
 
p
l
a
y
e
r
 
=
 
u
s
e
S
t
e
p
P
l
a
y
e
r
(
f
r
a
m
e
s
)
;


 
 
c
o
n
s
t
 
f
r
a
m
e
 
=
 
p
l
a
y
e
r
.
c
u
r
r
e
n
t
;


 
 
c
o
n
s
t
 
p
o
s
 
=
 
u
s
e
M
e
m
o
(
(
)
 
=
>
 
a
u
t
o
L
a
y
o
u
t
(
i
d
s
)
,
 
[
i
d
s
]
)
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
A
l
g
o
C
a
n
v
a
s


 
 
 
 
 
 
t
i
t
l
e
=
"
K
a
h
n
'
s
 
T
o
p
o
l
o
g
i
c
a
l
 
S
o
r
t
"


 
 
 
 
 
 
p
l
a
y
e
r
=
{
p
l
a
y
e
r
}


 
 
 
 
 
 
i
n
p
u
t
=
{


 
 
 
 
 
 
 
 
<
I
n
p
u
t
E
d
i
t
o
r


 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
D
i
r
e
c
t
e
d
 
e
d
g
e
s
 
(
A
>
B
)
"


 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
i
n
p
u
t
S
t
r
}


 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
"
A
>
B
,
 
B
>
C
,
 
.
.
.
"


 
 
 
 
 
 
 
 
 
 
h
e
l
p
e
r
=
"
A
d
d
 
a
 
c
y
c
l
e
 
(
e
.
g
.
 
'
C
>
A
'
)
 
t
o
 
s
e
e
 
t
h
e
 
'
n
o
t
 
a
 
D
A
G
'
 
w
a
r
n
i
n
g
.
"


 
 
 
 
 
 
 
 
 
 
p
r
e
s
e
t
s
=
{
[


 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
C
o
u
r
s
e
 
D
A
G
"
,
 
v
a
l
u
e
:
 
"
A
>
B
,
 
A
>
C
,
 
B
>
D
,
 
C
>
D
,
 
D
>
E
,
 
C
>
E
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
C
h
a
i
n
"
,
 
v
a
l
u
e
:
 
"
A
>
B
,
 
B
>
C
,
 
C
>
D
,
 
D
>
E
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
D
i
a
m
o
n
d
"
,
 
v
a
l
u
e
:
 
"
A
>
B
,
 
A
>
C
,
 
B
>
D
,
 
C
>
D
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
H
a
s
 
c
y
c
l
e
"
,
 
v
a
l
u
e
:
 
"
A
>
B
,
 
B
>
C
,
 
C
>
D
,
 
D
>
B
"
 
}
,


 
 
 
 
 
 
 
 
 
 
]
}


 
 
 
 
 
 
 
 
 
 
o
n
A
p
p
l
y
=
{
(
v
)
 
=
>
 
{
 
i
f
 
(
p
a
r
s
e
D
i
r
e
c
t
e
d
(
v
)
)
 
s
e
t
I
n
p
u
t
S
t
r
(
v
)
;
 
}
}


 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
}


 
 
 
 
 
 
p
s
e
u
d
o
c
o
d
e
=
{
<
P
s
e
u
d
o
c
o
d
e
P
a
n
e
l
 
l
i
n
e
s
=
{
K
A
H
N
_
P
S
E
U
D
O
}
 
a
c
t
i
v
e
L
i
n
e
=
{
f
r
a
m
e
?
.
l
i
n
e
}
 
/
>
}


 
 
 
 
 
 
v
a
r
i
a
b
l
e
s
=
{
<
V
a
r
i
a
b
l
e
s
P
a
n
e
l
 
v
a
r
s
=
{
f
r
a
m
e
?
.
v
a
r
s
 
?
?
 
{
}
}
 
f
l
a
s
h
K
e
y
s
=
{
f
r
a
m
e
?
.
f
l
a
s
h
K
e
y
 
?
 
[
"
u
"
,
 
"
v
"
]
 
:
 
[
]
}
 
/
>
}


 
 
 
 
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
 
f
l
e
x
-
c
o
l
 
g
a
p
-
3
"
>


 
 
 
 
 
 
 
 
{
f
r
a
m
e
 
&
&
 
<
G
r
a
p
h
S
V
G
 
i
d
s
=
{
i
d
s
}
 
e
d
g
e
s
=
{
e
d
g
e
s
}
 
p
o
s
=
{
p
o
s
}
 
f
r
a
m
e
=
{
f
r
a
m
e
}
 
/
>
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
2
 
g
a
p
-
3
"
>


 
 
 
 
 
 
 
 
 
 
{
f
r
a
m
e
 
&
&
 
<
Q
u
e
u
e
V
i
z
 
i
t
e
m
s
=
{
f
r
a
m
e
.
q
u
e
u
e
}
 
/
>
}


 
 
 
 
 
 
 
 
 
 
{
f
r
a
m
e
 
&
&
 
<
O
u
t
p
u
t
S
e
q
 
i
t
e
m
s
=
{
f
r
a
m
e
.
o
u
t
p
u
t
}
 
t
i
t
l
e
=
"
/
 
o
u
t
p
u
t
 
o
r
d
e
r
"
 
/
>
}


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
C
a
l
l
o
u
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
f
u
l
l
"
>
{
f
r
a
m
e
?
.
m
e
s
s
a
g
e
 
?
?
 
"
P
r
e
s
s
 
p
l
a
y
.
"
}
<
/
C
a
l
l
o
u
t
>


 
 
 
 
 
 
 
 
{
f
r
a
m
e
?
.
c
y
c
l
e
 
&
&
 
<
C
y
c
l
e
B
a
n
n
e
r
 
/
>
}


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
<
/
A
l
g
o
C
a
n
v
a
s
>


 
 
)
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
 
D
F
S
T
o
p
o
V
i
z
(
{
 
i
d
s
,
 
e
d
g
e
s
,
 
i
n
p
u
t
S
t
r
,
 
s
e
t
I
n
p
u
t
S
t
r
 
}
:
 
{


 
 
i
d
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


 
 
e
d
g
e
s
:
 
{
 
f
r
o
m
:
 
s
t
r
i
n
g
;
 
t
o
:
 
s
t
r
i
n
g
 
}
[
]
;


 
 
i
n
p
u
t
S
t
r
:
 
s
t
r
i
n
g
;


 
 
s
e
t
I
n
p
u
t
S
t
r
:
 
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
 
v
o
i
d
;


}
)
 
{


 
 
c
o
n
s
t
 
f
r
a
m
e
s
 
=
 
u
s
e
M
e
m
o
(
(
)
 
=
>
 
b
u
i
l
d
D
F
S
T
o
p
o
F
r
a
m
e
s
(
i
d
s
,
 
e
d
g
e
s
)
,
 
[
i
d
s
,
 
e
d
g
e
s
]
)
;


 
 
c
o
n
s
t
 
p
l
a
y
e
r
 
=
 
u
s
e
S
t
e
p
P
l
a
y
e
r
(
f
r
a
m
e
s
)
;


 
 
c
o
n
s
t
 
f
r
a
m
e
 
=
 
p
l
a
y
e
r
.
c
u
r
r
e
n
t
;


 
 
c
o
n
s
t
 
p
o
s
 
=
 
u
s
e
M
e
m
o
(
(
)
 
=
>
 
a
u
t
o
L
a
y
o
u
t
(
i
d
s
)
,
 
[
i
d
s
]
)
;


 
 
c
o
n
s
t
 
o
u
t
p
u
t
 
=
 
f
r
a
m
e
 
?
 
[
.
.
.
f
r
a
m
e
.
s
t
a
c
k
]
.
r
e
v
e
r
s
e
(
)
 
:
 
[
]
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
A
l
g
o
C
a
n
v
a
s


 
 
 
 
 
 
t
i
t
l
e
=
"
D
F
S
-
b
a
s
e
d
 
T
o
p
o
l
o
g
i
c
a
l
 
S
o
r
t
"


 
 
 
 
 
 
p
l
a
y
e
r
=
{
p
l
a
y
e
r
}


 
 
 
 
 
 
i
n
p
u
t
=
{


 
 
 
 
 
 
 
 
<
I
n
p
u
t
E
d
i
t
o
r


 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
D
i
r
e
c
t
e
d
 
e
d
g
e
s
 
(
A
>
B
)
"


 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
i
n
p
u
t
S
t
r
}


 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
"
A
>
B
,
 
B
>
C
,
 
.
.
.
"


 
 
 
 
 
 
 
 
 
 
h
e
l
p
e
r
=
"
A
d
d
 
a
 
c
y
c
l
e
 
(
e
.
g
.
 
'
C
>
A
'
)
 
t
o
 
s
e
e
 
t
h
e
 
'
n
o
t
 
a
 
D
A
G
'
 
w
a
r
n
i
n
g
.
"


 
 
 
 
 
 
 
 
 
 
p
r
e
s
e
t
s
=
{
[


 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
C
o
u
r
s
e
 
D
A
G
"
,
 
v
a
l
u
e
:
 
"
A
>
B
,
 
A
>
C
,
 
B
>
D
,
 
C
>
D
,
 
D
>
E
,
 
C
>
E
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
C
h
a
i
n
"
,
 
v
a
l
u
e
:
 
"
A
>
B
,
 
B
>
C
,
 
C
>
D
,
 
D
>
E
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
D
i
a
m
o
n
d
"
,
 
v
a
l
u
e
:
 
"
A
>
B
,
 
A
>
C
,
 
B
>
D
,
 
C
>
D
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
H
a
s
 
c
y
c
l
e
"
,
 
v
a
l
u
e
:
 
"
A
>
B
,
 
B
>
C
,
 
C
>
D
,
 
D
>
B
"
 
}
,


 
 
 
 
 
 
 
 
 
 
]
}


 
 
 
 
 
 
 
 
 
 
o
n
A
p
p
l
y
=
{
(
v
)
 
=
>
 
{
 
i
f
 
(
p
a
r
s
e
D
i
r
e
c
t
e
d
(
v
)
)
 
s
e
t
I
n
p
u
t
S
t
r
(
v
)
;
 
}
}


 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
}


 
 
 
 
 
 
p
s
e
u
d
o
c
o
d
e
=
{
<
P
s
e
u
d
o
c
o
d
e
P
a
n
e
l
 
l
i
n
e
s
=
{
D
F
S
_
P
S
E
U
D
O
}
 
a
c
t
i
v
e
L
i
n
e
=
{
f
r
a
m
e
?
.
l
i
n
e
}
 
/
>
}


 
 
 
 
 
 
v
a
r
i
a
b
l
e
s
=
{
<
V
a
r
i
a
b
l
e
s
P
a
n
e
l
 
v
a
r
s
=
{
f
r
a
m
e
?
.
v
a
r
s
 
?
?
 
{
}
}
 
f
l
a
s
h
K
e
y
s
=
{
f
r
a
m
e
?
.
f
l
a
s
h
K
e
y
 
?
 
[
"
u
"
,
 
"
v
"
]
 
:
 
[
]
}
 
/
>
}


 
 
 
 
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
 
f
l
e
x
-
c
o
l
 
g
a
p
-
3
"
>


 
 
 
 
 
 
 
 
{
f
r
a
m
e
 
&
&
 
<
G
r
a
p
h
S
V
G
 
i
d
s
=
{
i
d
s
}
 
e
d
g
e
s
=
{
e
d
g
e
s
}
 
p
o
s
=
{
p
o
s
}
 
f
r
a
m
e
=
{
f
r
a
m
e
}
 
/
>
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
2
 
g
a
p
-
3
"
>


 
 
 
 
 
 
 
 
 
 
{
f
r
a
m
e
 
&
&
 
<
S
t
a
c
k
V
i
z
 
i
t
e
m
s
=
{
f
r
a
m
e
.
s
t
a
c
k
}
 
/
>
}


 
 
 
 
 
 
 
 
 
 
<
O
u
t
p
u
t
S
e
q
 
i
t
e
m
s
=
{
o
u
t
p
u
t
}
 
t
i
t
l
e
=
"
/
 
t
o
p
o
l
o
g
i
c
a
l
 
o
r
d
e
r
 
(
s
t
a
c
k
 
t
o
p
→
b
o
t
t
o
m
)
"
 
/
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
C
a
l
l
o
u
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
f
u
l
l
"
>
{
f
r
a
m
e
?
.
m
e
s
s
a
g
e
 
?
?
 
"
P
r
e
s
s
 
p
l
a
y
.
"
}
<
/
C
a
l
l
o
u
t
>


 
 
 
 
 
 
 
 
{
f
r
a
m
e
?
.
c
y
c
l
e
 
&
&
 
<
C
y
c
l
e
B
a
n
n
e
r
 
/
>
}


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
<
/
A
l
g
o
C
a
n
v
a
s
>


 
 
)
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
V
i
s
u
a
l
i
z
e
 
t
a
b
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
V
i
s
u
a
l
i
z
e
T
a
b
(
)
 
{


 
 
c
o
n
s
t
 
[
m
o
d
e
,
 
s
e
t
M
o
d
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
"
k
a
h
n
"
 
|
 
"
d
f
s
"
>
(
"
k
a
h
n
"
)
;


 
 
c
o
n
s
t
 
[
i
n
p
u
t
S
t
r
,
 
s
e
t
I
n
p
u
t
S
t
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
(
"
A
>
B
,
 
A
>
C
,
 
B
>
D
,
 
C
>
D
,
 
D
>
E
,
 
C
>
E
"
)
;


 
 
c
o
n
s
t
 
p
a
r
s
e
d
 
=
 
u
s
e
M
e
m
o
(
(
)
 
=
>
 
p
a
r
s
e
D
i
r
e
c
t
e
d
(
i
n
p
u
t
S
t
r
)
,
 
[
i
n
p
u
t
S
t
r
]
)
;


 
 
c
o
n
s
t
 
i
d
s
 
=
 
p
a
r
s
e
d
?
.
i
d
s
 
?
?
 
[
]
;


 
 
c
o
n
s
t
 
e
d
g
e
s
 
=
 
p
a
r
s
e
d
?
.
e
d
g
e
s
 
?
?
 
[
]
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
f
l
e
x
 
f
l
e
x
-
c
o
l
 
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
f
l
e
x
 
g
a
p
-
2
 
f
l
e
x
-
w
r
a
p
"
>


 
 
 
 
 
 
 
 
<
P
i
l
l
B
u
t
t
o
n
 
a
c
t
i
v
e
=
{
m
o
d
e
 
=
=
=
 
"
k
a
h
n
"
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
 
s
e
t
M
o
d
e
(
"
k
a
h
n
"
)
}
>


 
 
 
 
 
 
 
 
 
 
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
"
t
e
x
t
-
x
s
"
>
K
a
h
n
'
s
 
(
B
F
S
)
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
<
/
P
i
l
l
B
u
t
t
o
n
>


 
 
 
 
 
 
 
 
<
P
i
l
l
B
u
t
t
o
n
 
a
c
t
i
v
e
=
{
m
o
d
e
 
=
=
=
 
"
d
f
s
"
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
 
s
e
t
M
o
d
e
(
"
d
f
s
"
)
}
>


 
 
 
 
 
 
 
 
 
 
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
"
t
e
x
t
-
x
s
"
>
D
F
S
-
b
a
s
e
d
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
<
/
P
i
l
l
B
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


 
 
 
 
 
 
{
m
o
d
e
 
=
=
=
 
"
k
a
h
n
"


 
 
 
 
 
 
 
 
?
 
<
K
a
h
n
V
i
z
 
i
d
s
=
{
i
d
s
}
 
e
d
g
e
s
=
{
e
d
g
e
s
}
 
i
n
p
u
t
S
t
r
=
{
i
n
p
u
t
S
t
r
}
 
s
e
t
I
n
p
u
t
S
t
r
=
{
s
e
t
I
n
p
u
t
S
t
r
}
 
/
>


 
 
 
 
 
 
 
 
:
 
<
D
F
S
T
o
p
o
V
i
z
 
i
d
s
=
{
i
d
s
}
 
e
d
g
e
s
=
{
e
d
g
e
s
}
 
i
n
p
u
t
S
t
r
=
{
i
n
p
u
t
S
t
r
}
 
s
e
t
I
n
p
u
t
S
t
r
=
{
s
e
t
I
n
p
u
t
S
t
r
}
 
/
>
}


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
L
e
a
r
n
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
L
e
a
r
n
T
a
b
(
)
 
{


 
 
c
o
n
s
t
 
s
e
c
t
i
o
n
s
 
=
 
[


 
 
 
 
{
 
t
i
t
l
e
:
 
"
T
h
e
 
p
r
o
m
i
s
e
"
,
 
b
o
d
y
:
 
"
F
o
r
 
a
 
D
A
G
 
(
d
i
r
e
c
t
e
d
 
a
c
y
c
l
i
c
 
g
r
a
p
h
)
,
 
a
 
t
o
p
o
l
o
g
i
c
a
l
 
o
r
d
e
r
 
i
s
 
a
 
l
i
n
e
a
r
 
a
r
r
a
n
g
e
m
e
n
t
 
o
f
 
v
e
r
t
i
c
e
s
 
s
u
c
h
 
t
h
a
t
 
e
v
e
r
y
 
e
d
g
e
 
u
→
v
 
g
o
e
s
 
f
r
o
m
 
e
a
r
l
i
e
r
 
t
o
 
l
a
t
e
r
.
 
E
x
a
m
p
l
e
s
:
 
c
o
u
r
s
e
 
p
r
e
r
e
q
u
i
s
i
t
e
s
,
 
b
u
i
l
d
 
s
y
s
t
e
m
s
,
 
t
a
s
k
 
s
c
h
e
d
u
l
e
r
s
.
"
 
}
,


 
 
 
 
{
 
t
i
t
l
e
:
 
"
K
a
h
n
'
s
 
a
l
g
o
r
i
t
h
m
 
(
B
F
S
)
"
,
 
b
o
d
y
:
 
"
S
t
a
r
t
 
w
i
t
h
 
a
l
l
 
i
n
-
d
e
g
r
e
e
-
0
 
v
e
r
t
i
c
e
s
 
i
n
 
a
 
q
u
e
u
e
.
 
D
e
q
u
e
u
e
 
o
n
e
,
 
a
p
p
e
n
d
 
t
o
 
o
u
t
p
u
t
,
 
a
n
d
 
d
e
c
r
e
m
e
n
t
 
i
n
-
d
e
g
r
e
e
 
o
f
 
e
a
c
h
 
n
e
i
g
h
b
o
r
.
 
A
n
y
 
n
e
i
g
h
b
o
r
 
h
i
t
t
i
n
g
 
0
 
e
n
t
e
r
s
 
t
h
e
 
q
u
e
u
e
.
 
I
f
 
|
o
u
t
p
u
t
|
 
<
 
|
V
|
,
 
a
 
c
y
c
l
e
 
p
r
e
v
e
n
t
e
d
 
c
o
m
p
l
e
t
i
o
n
.
"
 
}
,


 
 
 
 
{
 
t
i
t
l
e
:
 
"
D
F
S
-
b
a
s
e
d
"
,
 
b
o
d
y
:
 
"
R
u
n
 
D
F
S
.
 
A
s
 
e
a
c
h
 
v
e
r
t
e
x
 
f
i
n
i
s
h
e
s
 
(
t
u
r
n
s
 
B
L
A
C
K
)
,
 
p
u
s
h
 
o
n
t
o
 
a
 
s
t
a
c
k
.
 
R
e
v
e
r
s
e
 
t
h
e
 
s
t
a
c
k
 
a
t
 
t
h
e
 
e
n
d
.
 
U
s
e
s
 
t
h
e
 
p
a
r
e
n
t
h
e
s
i
s
 
t
h
e
o
r
e
m
,
 
a
 
v
e
r
t
e
x
 
w
i
t
h
 
a
n
 
o
u
t
g
o
i
n
g
 
e
d
g
e
 
m
u
s
t
 
f
i
n
i
s
h
 
a
f
t
e
r
 
i
t
s
 
d
e
s
c
e
n
d
a
n
t
s
.
"
 
}
,


 
 
 
 
{
 
t
i
t
l
e
:
 
"
U
n
i
q
u
e
n
e
s
s
"
,
 
b
o
d
y
:
 
"
T
o
p
o
l
o
g
i
c
a
l
 
o
r
d
e
r
 
i
s
 
n
o
t
 
u
n
i
q
u
e
 
i
n
 
g
e
n
e
r
a
l
.
 
I
t
 
i
s
 
u
n
i
q
u
e
 
i
f
f
 
t
h
e
 
D
A
G
 
h
a
s
 
a
 
H
a
m
i
l
t
o
n
i
a
n
 
p
a
t
h
 
(
e
a
c
h
 
s
t
e
p
 
h
a
s
 
e
x
a
c
t
l
y
 
o
n
e
 
i
n
-
d
e
g
r
e
e
-
0
 
o
r
 
o
n
e
 
e
d
g
e
 
f
o
r
w
a
r
d
)
.
"
 
}
,


 
 
]
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
f
l
e
x
 
f
l
e
x
-
c
o
l
 
g
a
p
-
5
"
>


 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
<
S
e
c
t
i
o
n
E
y
e
b
r
o
w
>
m
e
n
t
a
l
 
m
o
d
e
l
<
/
S
e
c
t
i
o
n
E
y
e
b
r
o
w
>


 
 
 
 
 
 
 
 
<
S
e
c
t
i
o
n
T
i
t
l
e
>
S
c
h
e
d
u
l
e
 
c
l
a
s
s
e
s
.
 
R
e
s
p
e
c
t
 
e
v
e
r
y
 
p
r
e
r
e
q
u
i
s
i
t
e
.
<
/
S
e
c
t
i
o
n
T
i
t
l
e
>


 
 
 
 
 
 
 
 
<
L
e
d
e
>


 
 
 
 
 
 
 
 
 
 
I
m
a
g
i
n
e
 
y
o
u
r
 
c
o
l
l
e
g
e
'
s
 
p
r
e
r
e
q
u
i
s
i
t
e
 
g
r
a
p
h
.
 
Y
o
u
 
c
a
n
 
o
n
l
y
 
t
a
k
e
 
a
 
c
o
u
r
s
e
 
a
f
t
e
r
 
i
t
s
 
p
r
e
r
e
q
s
.
 
A


 
 
 
 
 
 
 
 
 
 
t
o
p
o
l
o
g
i
c
a
l
 
o
r
d
e
r
 
i
s
 
a
 
v
a
l
i
d
 
s
e
m
e
s
t
e
r
-
b
y
-
s
e
m
e
s
t
e
r
 
s
c
h
e
d
u
l
e
,
 
a
n
d
 
o
n
l
y
 
e
x
i
s
t
s
 
i
f
 
t
h
e
r
e
 
a
r
e


 
 
 
 
 
 
 
 
 
 
n
o
 
c
i
r
c
u
l
a
r
 
d
e
p
e
n
d
e
n
c
i
e
s
.


 
 
 
 
 
 
 
 
<
/
L
e
d
e
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
1
 
s
m
:
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
2
 
g
a
p
-
3
"
>


 
 
 
 
 
 
 
 
{
s
e
c
t
i
o
n
s
.
m
a
p
(
(
s
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
<
C
a
r
d
 
k
e
y
=
{
i
}
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
m
o
n
o
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
l
i
m
e
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
l
i
m
e
-
4
0
0
 
m
b
-
2
"
>
0
{
i
 
+
 
1
}
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
 
t
e
x
t
-
s
t
o
n
e
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
s
t
o
n
e
-
5
0
 
m
b
-
1
"
>
{
s
.
t
i
t
l
e
}
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
s
t
o
n
e
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
s
t
o
n
e
-
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>
{
s
.
b
o
d
y
}
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
/
C
a
r
d
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


 
 
)
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
T
r
y
 
I
t
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
T
r
y
T
a
b
(
)
 
{


 
 
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
f
l
e
x
 
f
l
e
x
-
c
o
l
 
g
a
p
-
3
"
>


 
 
 
 
 
 
<
C
a
l
l
o
u
t
>
T
r
y
 
t
h
e
 
"
H
a
s
 
c
y
c
l
e
"
 
p
r
e
s
e
t
,
 
b
o
t
h
 
a
l
g
o
r
i
t
h
m
s
 
s
h
o
u
l
d
 
f
l
a
g
 
i
t
.
<
/
C
a
l
l
o
u
t
>


 
 
 
 
 
 
{
[


 
 
 
 
 
 
 
 
"
O
n
 
t
h
e
 
C
o
u
r
s
e
 
D
A
G
 
p
r
e
s
e
t
,
 
g
i
v
e
 
o
n
e
 
v
a
l
i
d
 
t
o
p
o
 
o
r
d
e
r
.
 
(
E
x
p
e
c
t
e
d
:
 
A
,
 
B
,
 
C
,
 
D
,
 
E
 
o
r
 
A
,
 
C
,
 
B
,
 
D
,
 
E
)
"
,


 
 
 
 
 
 
 
 
"
C
a
n
 
a
 
t
o
p
o
l
o
g
i
c
a
l
 
s
o
r
t
 
o
f
 
a
 
D
A
G
 
b
e
 
d
o
n
e
 
i
n
 
O
(
V
+
E
)
?
 
(
E
x
p
e
c
t
e
d
:
 
Y
e
s
,
 
b
o
t
h
 
K
a
h
n
 
a
n
d
 
D
F
S
 
r
u
n
 
i
n
 
O
(
V
+
E
)
)
"
,


 
 
 
 
 
 
 
 
"
W
h
a
t
'
s
 
t
h
e
 
m
i
n
i
m
u
m
 
n
u
m
b
e
r
 
o
f
 
e
d
g
e
s
 
w
e
 
c
a
n
 
r
e
m
o
v
e
 
t
o
 
m
a
k
e
 
'
H
a
s
 
c
y
c
l
e
'
 
p
r
e
s
e
t
 
a
 
D
A
G
?
 
(
E
x
p
e
c
t
e
d
:
 
1
)
"
,


 
 
 
 
 
 
]
.
m
a
p
(
(
q
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
<
C
a
r
d
 
k
e
y
=
{
i
}
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
s
t
o
n
e
-
8
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
s
t
o
n
e
-
2
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>


 
 
 
 
 
 
 
 
 
 
 
 
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
"
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
l
i
m
e
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
l
i
m
e
-
4
0
0
"
>
#
{
i
 
+
 
1
}
<
/
s
p
a
n
>
 
{
q
}


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
/
C
a
r
d
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


 
 
)
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
I
n
s
i
g
h
t
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
I
n
s
i
g
h
t
T
a
b
(
)
 
{


 
 
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
f
l
e
x
 
f
l
e
x
-
c
o
l
 
g
a
p
-
4
"
>


 
 
 
 
 
 
<
C
a
r
d
>


 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
W
h
e
n
 
t
o
 
u
s
e
 
w
h
i
c
h
?
<
/
S
u
b
H
e
a
d
i
n
g
>


 
 
 
 
 
 
 
 
<
u
l
 
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
l
i
s
t
-
d
i
s
c
 
p
l
-
5
 
s
p
a
c
e
-
y
-
1
.
5
 
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
s
t
o
n
e
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
s
t
o
n
e
-
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
K
a
h
n
:
 
n
a
t
u
r
a
l
 
i
f
 
y
o
u
 
n
e
e
d
 
t
o
 
d
e
t
e
c
t
 
c
y
c
l
e
s
 
e
x
p
l
i
c
i
t
l
y
,
 
o
r
 
i
f
 
y
o
u
 
w
a
n
t
 
l
e
x
i
c
o
g
r
a
p
h
i
c
a
l
l
y
 
s
m
a
l
l
e
s
t
 
o
r
d
e
r
 
(
u
s
e
 
a
 
p
r
i
o
r
i
t
y
 
q
u
e
u
e
)
.
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
D
F
S
:
 
n
a
t
u
r
a
l
 
i
f
 
y
o
u
 
a
r
e
 
a
l
r
e
a
d
y
 
d
o
i
n
g
 
D
F
S
 
(
S
C
C
,
 
c
y
c
l
e
 
f
i
n
d
i
n
g
)
.
 
E
l
e
g
a
n
t
 
r
e
c
u
r
s
i
v
e
 
c
o
d
e
.
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
B
o
t
h
 
O
(
V
 
+
 
E
)
.
 
K
a
h
n
 
i
s
 
o
f
t
e
n
 
e
a
s
i
e
r
 
t
o
 
p
a
r
a
l
l
e
l
i
z
e
.
<
/
l
i
>


 
 
 
 
 
 
 
 
<
/
u
l
>


 
 
 
 
 
 
<
/
C
a
r
d
>


 
 
 
 
 
 
<
C
a
r
d
>


 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
D
o
w
n
s
t
r
e
a
m
 
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
<
/
S
u
b
H
e
a
d
i
n
g
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
s
t
o
n
e
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
s
t
o
n
e
-
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>


 
 
 
 
 
 
 
 
 
 
S
h
o
r
t
e
s
t
/
l
o
n
g
e
s
t
 
p
a
t
h
 
o
n
 
a
 
D
A
G
 
i
n
 
O
(
V
+
E
)
,
 
j
u
s
t
 
r
e
l
a
x
 
e
d
g
e
s
 
i
n
 
t
o
p
o
l
o
g
i
c
a
l
 
o
r
d
e
r
.


 
 
 
 
 
 
 
 
 
 
D
e
p
e
n
d
e
n
c
y
 
r
e
s
o
l
u
t
i
o
n
 
(
M
a
k
e
f
i
l
e
s
,
 
n
p
m
 
i
n
s
t
a
l
l
)
.
 
I
n
s
t
r
u
c
t
i
o
n
 
s
c
h
e
d
u
l
i
n
g
 
i
n
 
c
o
m
p
i
l
e
r
s
.


 
 
 
 
 
 
 
 
 
 
S
p
r
e
a
d
s
h
e
e
t
 
c
e
l
l
 
r
e
c
a
l
c
u
l
a
t
i
o
n
.


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
<
/
C
a
r
d
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




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




i
n
t
e
r
f
a
c
e
 
P
r
o
p
s
 
{


 
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
?
:
 
(
s
c
o
r
e
:
 
n
u
m
b
e
r
)
 
=
>
 
v
o
i
d
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
 
L
4
_
T
o
p
o
l
o
g
i
c
a
l
S
o
r
t
(
{
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
 
}
:
 
P
r
o
p
s
)
 
{


 
 
c
o
n
s
t
 
t
a
b
s
:
 
L
e
s
s
o
n
T
a
b
D
e
f
[
]
 
=
 
[


 
 
 
 
{
 
i
d
:
 
"
l
e
a
r
n
"
,
 
l
a
b
e
l
:
 
"
L
e
a
r
n
"
,
 
i
c
o
n
:
 
<
B
o
o
k
O
p
e
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
,
 
c
o
n
t
e
n
t
:
 
<
L
e
a
r
n
T
a
b
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
v
i
s
u
a
l
i
z
e
"
,
 
l
a
b
e
l
:
 
"
V
i
s
u
a
l
i
z
e
"
,
 
i
c
o
n
:
 
<
P
l
a
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
w
-
4
 
h
-
4
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
V
i
s
u
a
l
i
z
e
T
a
b
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
t
r
y
"
,
 
l
a
b
e
l
:
 
"
T
r
y
 
I
t
"
,
 
i
c
o
n
:
 
<
T
a
r
g
e
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
,
 
c
o
n
t
e
n
t
:
 
<
T
r
y
T
a
b
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
i
n
s
i
g
h
t
"
,
 
l
a
b
e
l
:
 
"
I
n
s
i
g
h
t
"
,
 
i
c
o
n
:
 
<
L
i
g
h
t
b
u
l
b
 
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
,
 
c
o
n
t
e
n
t
:
 
<
I
n
s
i
g
h
t
T
a
b
 
/
>
 
}
,


 
 
 
 
.
.
.
(
P
R
A
C
T
I
C
E
_
T
O
P
I
C
_
S
L
U
G


 
 
 
 
 
 
?
 
[


 
 
 
 
 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
 
 
 
 
i
d
:
 
"
p
r
a
c
t
i
c
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
:
 
"
P
r
a
c
t
i
c
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
i
c
o
n
:
 
<
C
o
d
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
"
 
/
>
,


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
t
e
n
t
:
 
<
P
r
a
c
t
i
c
e
T
a
b
 
t
o
p
i
c
S
l
u
g
=
{
P
R
A
C
T
I
C
E
_
T
O
P
I
C
_
S
L
U
G
}
 
/
>
,


 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
]


 
 
 
 
 
 
:
 
[
]
)
,


 
 
]
;




 
 
c
o
n
s
t
 
q
u
i
z
:
 
L
e
s
s
o
n
Q
u
i
z
Q
u
e
s
t
i
o
n
[
]
 
=
 
[


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
A
 
t
o
p
o
l
o
g
i
c
a
l
 
o
r
d
e
r
i
n
g
 
i
s
 
p
o
s
s
i
b
l
e
 
f
o
r
…
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
A
n
y
 
d
i
r
e
c
t
e
d
 
g
r
a
p
h
"
,
 
"
A
n
y
 
u
n
d
i
r
e
c
t
e
d
 
g
r
a
p
h
"
,
 
"
O
n
l
y
 
D
A
G
s
"
,
 
"
A
n
y
 
c
o
n
n
e
c
t
e
d
 
g
r
a
p
h
"
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
2
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:


 
 
 
 
 
 
 
 
"
T
o
p
o
l
o
g
i
c
a
l
 
o
r
d
e
r
 
r
e
q
u
i
r
e
s
 
n
o
 
c
y
c
l
e
s
.
 
I
f
 
a
n
y
 
c
y
c
l
e
 
e
x
i
s
t
s
,
 
n
o
 
v
a
l
i
d
 
o
r
d
e
r
i
n
g
 
c
a
n
 
s
a
t
i
s
f
y
 
a
l
l
 
e
d
g
e
s
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
I
n
 
K
a
h
n
'
s
 
a
l
g
o
r
i
t
h
m
,
 
t
h
e
 
i
n
i
t
i
a
l
 
q
u
e
u
e
 
c
o
n
t
a
i
n
s
…
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[


 
 
 
 
 
 
 
 
"
A
l
l
 
v
e
r
t
i
c
e
s
"
,


 
 
 
 
 
 
 
 
"
A
l
l
 
v
e
r
t
i
c
e
s
 
w
i
t
h
 
i
n
-
d
e
g
r
e
e
 
0
"
,


 
 
 
 
 
 
 
 
"
A
l
l
 
v
e
r
t
i
c
e
s
 
w
i
t
h
 
o
u
t
-
d
e
g
r
e
e
 
0
"
,


 
 
 
 
 
 
 
 
"
T
h
e
 
s
t
a
r
t
 
v
e
r
t
e
x
 
o
n
l
y
"
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:


 
 
 
 
 
 
 
 
"
V
e
r
t
i
c
e
s
 
w
i
t
h
 
i
n
-
d
e
g
r
e
e
 
0
 
h
a
v
e
 
n
o
 
p
r
e
r
e
q
u
i
s
i
t
e
s
,
 
t
h
e
y
 
c
a
n
 
b
e
 
f
i
r
s
t
 
i
n
 
a
n
y
 
v
a
l
i
d
 
o
r
d
e
r
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
I
n
 
D
F
S
-
b
a
s
e
d
 
t
o
p
o
 
s
o
r
t
,
 
t
h
e
 
t
o
p
o
l
o
g
i
c
a
l
 
o
r
d
e
r
 
i
s
 
o
b
t
a
i
n
e
d
 
b
y
…
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[


 
 
 
 
 
 
 
 
"
R
e
a
d
i
n
g
 
d
i
s
c
o
v
e
r
y
 
t
i
m
e
s
"
,


 
 
 
 
 
 
 
 
"
R
e
a
d
i
n
g
 
f
i
n
i
s
h
 
t
i
m
e
s
 
i
n
 
r
e
v
e
r
s
e
 
o
r
d
e
r
"
,


 
 
 
 
 
 
 
 
"
T
h
e
 
o
r
d
e
r
 
n
o
d
e
s
 
a
r
e
 
f
i
r
s
t
 
v
i
s
i
t
e
d
"
,


 
 
 
 
 
 
 
 
"
A
r
b
i
t
r
a
r
y
"
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:


 
 
 
 
 
 
 
 
"
S
o
r
t
 
b
y
 
d
e
c
r
e
a
s
i
n
g
 
f
i
n
i
s
h
 
t
i
m
e
.
 
E
q
u
i
v
a
l
e
n
t
 
t
o
 
p
o
p
p
i
n
g
 
a
 
s
t
a
c
k
 
w
h
e
r
e
 
e
a
c
h
 
n
o
d
e
 
i
s
 
p
u
s
h
e
d
 
u
p
o
n
 
f
i
n
i
s
h
i
n
g
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
H
o
w
 
c
a
n
 
K
a
h
n
'
s
 
a
l
g
o
r
i
t
h
m
 
d
e
t
e
c
t
 
t
h
a
t
 
t
h
e
 
i
n
p
u
t
 
g
r
a
p
h
 
h
a
s
 
a
 
c
y
c
l
e
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
N
e
g
a
t
i
v
e
 
i
n
-
d
e
g
r
e
e
s
"
,
 
"
|
o
u
t
p
u
t
|
 
<
 
|
V
|
 
a
t
 
t
h
e
 
e
n
d
"
,
 
"
Q
u
e
u
e
 
o
v
e
r
f
l
o
w
s
"
,
 
"
D
F
S
 
r
e
t
u
r
n
s
 
f
a
l
s
e
"
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:


 
 
 
 
 
 
 
 
"
I
f
 
c
y
c
l
e
s
 
e
x
i
s
t
,
 
s
o
m
e
 
v
e
r
t
i
c
e
s
 
n
e
v
e
r
 
r
e
a
c
h
 
i
n
-
d
e
g
r
e
e
 
0
 
a
n
d
 
a
r
e
 
n
e
v
e
r
 
e
n
q
u
e
u
e
d
.
 
T
h
e
 
o
u
t
p
u
t
 
s
e
q
u
e
n
c
e
 
w
i
l
l
 
b
e
 
s
h
o
r
t
.
"
,


 
 
 
 
}
,


 
 
]
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
L
e
s
s
o
n
S
h
e
l
l


 
 
 
 
 
 
t
i
t
l
e
=
"
T
o
p
o
l
o
g
i
c
a
l
 
S
o
r
t
"


 
 
 
 
 
 
l
e
v
e
l
=
{
4
}


 
 
 
 
 
 
l
e
s
s
o
n
N
u
m
b
e
r
=
{
4
}


 
 
 
 
 
 
t
a
b
s
=
{
t
a
b
s
}


 
 
 
 
 
 
q
u
i
z
=
{
q
u
i
z
}


 
 
 
 
 
 
p
l
a
c
e
m
e
n
t
R
e
l
e
v
a
n
c
e
=
"
H
i
g
h
,
 
s
c
h
e
d
u
l
i
n
g
,
 
d
e
p
e
n
d
e
n
c
y
 
r
e
s
o
l
u
t
i
o
n
,
 
c
o
m
p
i
l
e
r
 
I
R
.
"


 
 
 
 
 
 
n
e
x
t
L
e
s
s
o
n
H
i
n
t
=
"
D
i
j
k
s
t
r
a
'
s
 
S
h
o
r
t
e
s
t
 
P
a
t
h
"


 
 
 
 
 
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
=
{
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
}


 
 
 
 
/
>


 
 
)
;


}


