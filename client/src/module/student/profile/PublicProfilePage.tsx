
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
P
a
r
a
m
s
,
 
u
s
e
N
a
v
i
g
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
 
u
s
e
Q
u
e
r
y
 
}
 
f
r
o
m
 
"
@
t
a
n
s
t
a
c
k
/
r
e
a
c
t
-
q
u
e
r
y
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
 
M
a
p
P
i
n
,
 
G
r
a
d
u
a
t
i
o
n
C
a
p
,
 
L
i
n
k
e
d
i
n
,
 
G
i
t
h
u
b
,
 
G
l
o
b
e
,


 
 
E
x
t
e
r
n
a
l
L
i
n
k
,
 
F
i
l
e
T
e
x
t
,
 
S
h
i
e
l
d
C
h
e
c
k
,
 
T
r
o
p
h
y
,
 
F
o
l
d
e
r
G
i
t
2
,
 
B
r
i
e
f
c
a
s
e
,
 
C
a
l
e
n
d
a
r
,


 
 
P
h
o
n
e
,
 
M
a
i
l
,
 
C
l
o
c
k
,
 
U
s
e
r
,


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


i
m
p
o
r
t
 
{
 
L
o
a
d
i
n
g
S
c
r
e
e
n
 
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
L
o
a
d
i
n
g
S
c
r
e
e
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
 
{
 
B
u
t
t
o
n
 
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
u
i
/
b
u
t
t
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
 
B
a
d
g
e
s
S
e
c
t
i
o
n
 
}
 
f
r
o
m
 
"
.
.
/
b
a
d
g
e
s
/
B
a
d
g
e
s
S
e
c
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
 
C
o
n
t
r
i
b
u
t
i
o
n
G
r
a
p
h
s
 
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
C
o
n
t
r
i
b
u
t
i
o
n
G
r
a
p
h
s
"
;


i
m
p
o
r
t
 
G
i
t
H
u
b
S
t
a
t
s
C
a
r
d
 
f
r
o
m
 
"
.
/
G
i
t
H
u
b
S
t
a
t
s
C
a
r
d
"
;


i
m
p
o
r
t
 
{
 
O
s
s
C
o
n
t
r
i
b
u
t
i
o
n
H
e
a
t
m
a
p
 
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
O
s
s
C
o
n
t
r
i
b
u
t
i
o
n
H
e
a
t
m
a
p
"
;


i
m
p
o
r
t
 
t
y
p
e
 
{
 
P
r
o
j
e
c
t
I
t
e
m
,
 
A
c
h
i
e
v
e
m
e
n
t
I
t
e
m
,
 
V
e
r
i
f
i
e
d
S
k
i
l
l
 
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
l
i
b
/
t
y
p
e
s
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
 
P
u
b
l
i
c
P
r
o
f
i
l
e
 
{


 
 
i
d
:
 
n
u
m
b
e
r
;


 
 
p
r
o
f
i
l
e
S
l
u
g
?
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


 
 
p
r
o
f
i
l
e
P
i
c
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
I
m
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


 
 
b
i
o
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
l
l
e
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


 
 
g
r
a
d
u
a
t
i
o
n
Y
e
a
r
?
:
 
n
u
m
b
e
r
;


 
 
s
k
i
l
l
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


 
 
l
o
c
a
t
i
o
n
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


 
 
g
i
t
h
u
b
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
n
t
a
c
t
N
o
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
m
p
a
n
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


 
 
d
e
s
i
g
n
a
t
i
o
n
?
:
 
s
t
r
i
n
g
;


 
 
j
o
b
S
t
a
t
u
s
?
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
;


 
 
p
r
o
j
e
c
t
s
:
 
P
r
o
j
e
c
t
I
t
e
m
[
]
;


 
 
a
c
h
i
e
v
e
m
e
n
t
s
:
 
A
c
h
i
e
v
e
m
e
n
t
I
t
e
m
[
]
;


 
 
r
e
s
u
m
e
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


 
 
b
e
s
t
A
t
s
S
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
 
|
 
n
u
l
l
;


 
 
v
e
r
i
f
i
e
d
S
k
i
l
l
s
:
 
V
e
r
i
f
i
e
d
S
k
i
l
l
[
]
;


 
 
c
r
e
a
t
e
d
A
t
:
 
s
t
r
i
n
g
;


 
 
o
s
s
T
i
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




/
/
 
─
─
─
 
T
I
E
R
 
C
O
L
O
R
S
 
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─


c
o
n
s
t
 
O
S
S
_
T
I
E
R
_
C
O
L
O
R
S
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


 
 
"
F
i
r
s
t
 
S
t
e
p
s
"
:
 
"
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
"
,


 
 
"
C
o
n
t
r
i
b
u
t
o
r
"
:
 
"
b
g
-
s
t
o
n
e
-
1
0
0
 
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
7
0
0
 
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
3
0
0
"
,


 
 
"
A
c
t
i
v
e
 
C
o
n
t
r
i
b
u
t
o
r
"
:
 
"
b
g
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
4
0
0
"
,


 
 
"
O
S
S
 
L
e
a
d
e
r
"
:
 
"
b
g
-
s
t
o
n
e
-
3
0
0
 
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
5
0
0
"
,


 
 
"
A
m
b
a
s
s
a
d
o
r
"
:
 
"
b
g
-
l
i
m
e
-
4
0
0
 
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
 
b
o
r
d
e
r
-
l
i
m
e
-
5
0
0
"
,


}
;




c
o
n
s
t
 
f
a
d
e
I
n
U
p
 
=
 
{


 
 
h
i
d
d
e
n
:
 
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
 
2
0
 
}
,


 
 
v
i
s
i
b
l
e
:
 
(
i
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
 
(
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
,


 
 
 
 
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
:
 
{
 
d
e
l
a
y
:
 
i
 
*
 
0
.
0
8
,
 
d
u
r
a
t
i
o
n
:
 
0
.
4
5
,
 
e
a
s
e
:
 
[
0
.
2
2
,
 
1
,
 
0
.
3
6
,
 
1
]
 
a
s
 
c
o
n
s
t
 
}
,


 
 
}
)
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
 
g
e
t
J
o
b
S
t
a
t
u
s
I
n
f
o
(
s
t
a
t
u
s
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
)
 
{


 
 
c
o
n
s
t
 
m
a
p
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
 
l
a
b
e
l
:
 
s
t
r
i
n
g
;
 
c
l
s
:
 
s
t
r
i
n
g
 
}
>
 
=
 
{


 
 
 
 
L
O
O
K
I
N
G
:
 
{
 
l
a
b
e
l
:
 
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
 
j
o
b
"
,
 
c
l
s
:
 
"
b
g
-
e
m
e
r
a
l
d
-
5
0
 
t
e
x
t
-
e
m
e
r
a
l
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
b
g
-
e
m
e
r
a
l
d
-
9
0
0
/
2
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
e
m
e
r
a
l
d
-
4
0
0
"
 
}
,


 
 
 
 
O
P
E
N
_
T
O
_
O
F
F
E
R
:
 
{
 
l
a
b
e
l
:
 
"
O
p
e
n
 
t
o
 
o
f
f
e
r
"
,
 
c
l
s
:
 
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
b
g
-
b
l
u
e
-
9
0
0
/
2
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
4
0
0
"
 
}
,


 
 
 
 
N
O
_
O
F
F
E
R
:
 
{
 
l
a
b
e
l
:
 
"
N
o
 
o
f
f
e
r
"
,
 
c
l
s
:
 
"
b
g
-
g
r
a
y
-
1
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
5
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
 
}
,


 
 
}
;


 
 
r
e
t
u
r
n
 
s
t
a
t
u
s
 
?
 
m
a
p
[
s
t
a
t
u
s
]
 
?
?
 
n
u
l
l
 
:
 
n
u
l
l
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
 
g
e
t
F
i
l
e
N
a
m
e
F
r
o
m
U
r
l
(
u
r
l
:
 
s
t
r
i
n
g
)
:
 
s
t
r
i
n
g
 
{


 
 
t
r
y
 
{


 
 
 
 
c
o
n
s
t
 
p
a
t
h
n
a
m
e
 
=
 
n
e
w
 
U
R
L
(
u
r
l
)
.
p
a
t
h
n
a
m
e
;


 
 
 
 
c
o
n
s
t
 
p
a
r
t
s
 
=
 
p
a
t
h
n
a
m
e
.
s
p
l
i
t
(
"
/
"
)
;


 
 
 
 
c
o
n
s
t
 
f
u
l
l
 
=
 
d
e
c
o
d
e
U
R
I
C
o
m
p
o
n
e
n
t
(
p
a
r
t
s
[
p
a
r
t
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
]
 
?
?
 
"
r
e
s
u
m
e
.
p
d
f
"
)
;


 
 
 
 
c
o
n
s
t
 
m
a
t
c
h
 
=
 
f
u
l
l
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
.
+
)
-
\
d
+
-
\
d
+
(
\
.
\
w
+
)
$
/
)
;


 
 
 
 
r
e
t
u
r
n
 
m
a
t
c
h
 
?
 
`
$
{
m
a
t
c
h
[
1
]
}
$
{
m
a
t
c
h
[
2
]
}
`
 
:
 
f
u
l
l
;


 
 
}
 
c
a
t
c
h
 
{


 
 
 
 
r
e
t
u
r
n
 
"
r
e
s
u
m
e
.
p
d
f
"
;


 
 
}


}




f
u
n
c
t
i
o
n
 
f
o
r
m
a
t
D
a
t
e
(
d
a
t
e
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
)
 
{


 
 
r
e
t
u
r
n
 
n
e
w
 
D
a
t
e
(
d
a
t
e
S
t
r
)
.
t
o
L
o
c
a
l
e
D
a
t
e
S
t
r
i
n
g
(
"
e
n
-
U
S
"
,
 
{
 
m
o
n
t
h
:
 
"
s
h
o
r
t
"
,
 
y
e
a
r
:
 
"
n
u
m
e
r
i
c
"
 
}
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
 
P
u
b
l
i
c
P
r
o
f
i
l
e
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
,
 
i
d
e
n
t
i
f
i
e
r
 
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
(
)
;


 
 
c
o
n
s
t
 
n
a
v
i
g
a
t
e
 
=
 
u
s
e
N
a
v
i
g
a
t
e
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
a
l
I
d
 
=
 
i
d
e
n
t
i
f
i
e
r
 
|
|
 
i
d
;




 
 
c
o
n
s
t
 
{
 
d
a
t
a
:
 
p
r
o
f
i
l
e
,
 
i
s
L
o
a
d
i
n
g
,
 
e
r
r
o
r
 
}
 
=
 
u
s
e
Q
u
e
r
y
(
{


 
 
 
 
q
u
e
r
y
K
e
y
:
 
[
"
p
u
b
l
i
c
-
p
r
o
f
i
l
e
"
,
 
f
i
n
a
l
I
d
]
,


 
 
 
 
q
u
e
r
y
F
n
:
 
(
)
 
=
>
 
a
p
i
.
g
e
t
(
`
/
a
u
t
h
/
p
r
o
f
i
l
e
/
$
{
f
i
n
a
l
I
d
}
`
)
.
t
h
e
n
(
(
r
e
s
)
 
=
>
 
r
e
s
.
d
a
t
a
.
p
r
o
f
i
l
e
 
a
s
 
P
u
b
l
i
c
P
r
o
f
i
l
e
)
,


 
 
 
 
e
n
a
b
l
e
d
:
 
!
!
f
i
n
a
l
I
d
,


 
 
}
)
;




 
 
i
f
 
(
i
s
L
o
a
d
i
n
g
)
 
r
e
t
u
r
n
 
<
L
o
a
d
i
n
g
S
c
r
e
e
n
 
/
>
;


 
 
i
f
 
(
e
r
r
o
r
 
|
|
 
!
p
r
o
f
i
l
e
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
 
p
y
-
2
0
"
>


 
 
 
 
 
 
 
 
<
h
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
t
e
x
t
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
g
r
a
y
-
9
5
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
2
"
>
P
r
o
f
i
l
e
 
n
o
t
 
f
o
u
n
d
<
/
h
2
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
g
r
a
y
-
5
0
0
 
m
b
-
4
"
>
T
h
i
s
 
s
t
u
d
e
n
t
 
p
r
o
f
i
l
e
 
d
o
e
s
n
'
t
 
e
x
i
s
t
 
o
r
 
y
o
u
 
d
o
n
'
t
 
h
a
v
e
 
p
e
r
m
i
s
s
i
o
n
 
t
o
 
v
i
e
w
 
i
t
.
<
/
p
>


 
 
 
 
 
 
 
 
<
B
u
t
t
o
n
 
v
a
r
i
a
n
t
=
"
p
r
i
m
a
r
y
"
 
m
o
d
e
=
"
l
i
n
k
"
 
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
 
n
a
v
i
g
a
t
e
(
-
1
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
"
t
e
x
t
-
i
n
d
i
g
o
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
i
n
d
i
g
o
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
G
o
 
b
a
c
k
<
/
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


 
 
 
 
)
;


 
 
}




 
 
c
o
n
s
t
 
v
e
r
i
f
i
e
d
M
a
p
 
=
 
n
e
w
 
M
a
p
(
p
r
o
f
i
l
e
.
v
e
r
i
f
i
e
d
S
k
i
l
l
s
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
 
[
v
.
s
k
i
l
l
N
a
m
e
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
,
 
v
]
)
)
;


 
 
c
o
n
s
t
 
j
o
b
S
t
a
t
u
s
I
n
f
o
 
=
 
g
e
t
J
o
b
S
t
a
t
u
s
I
n
f
o
(
p
r
o
f
i
l
e
.
j
o
b
S
t
a
t
u
s
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
r
e
l
a
t
i
v
e
 
p
b
-
1
2
 
m
a
x
-
w
-
5
x
l
 
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
S
E
O


 
 
 
 
 
 
 
 
t
i
t
l
e
=
{
`
$
{
p
r
o
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
 
—
 
I
n
t
e
r
n
H
a
c
k
 
P
r
o
f
i
l
e
`
}


 
 
 
 
 
 
 
 
d
e
s
c
r
i
p
t
i
o
n
=
{
`
$
{
p
r
o
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
'
s
 
s
k
i
l
l
s
:
 
$
{
p
r
o
f
i
l
e
.
s
k
i
l
l
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
$
{
p
r
o
f
i
l
e
.
s
k
i
l
l
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
 
?
 
"
 
a
n
d
 
m
o
r
e
"
 
:
 
"
"
}
.
 
$
{
p
r
o
f
i
l
e
.
b
i
o
 
?
 
p
r
o
f
i
l
e
.
b
i
o
.
s
l
i
c
e
(
0
,
 
1
0
0
)
 
:
 
"
V
i
e
w
 
t
h
e
i
r
 
p
r
o
j
e
c
t
s
,
 
a
c
h
i
e
v
e
m
e
n
t
s
,
 
a
n
d
 
v
e
r
i
f
i
e
d
 
s
k
i
l
l
s
 
o
n
 
I
n
t
e
r
n
H
a
c
k
.
"
}
`
}


 
 
 
 
 
 
 
 
o
g
I
m
a
g
e
=
{
p
r
o
f
i
l
e
.
p
r
o
f
i
l
e
P
i
c
 
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
}


 
 
 
 
 
 
 
 
o
g
T
y
p
e
=
"
p
r
o
f
i
l
e
"


 
 
 
 
 
 
 
 
c
a
n
o
n
i
c
a
l
U
r
l
=
{
`
h
t
t
p
s
:
/
/
i
n
t
e
r
n
h
a
c
k
.
x
y
z
/
s
t
u
d
e
n
t
/
p
r
o
f
i
l
e
/
$
{
p
r
o
f
i
l
e
.
i
d
}
`
}


 
 
 
 
 
 
/
>




 
 
 
 
 
 
{
/
*
 
B
a
c
k
 
b
u
t
t
o
n
 
*
/
}


 
 
 
 
 
 
<
m
o
t
i
o
n
.
b
u
t
t
o
n


 
 
 
 
 
 
 
 
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
 
x
:
 
-
1
0
 
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
 
x
:
 
0
 
}
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
 
n
a
v
i
g
a
t
e
(
-
1
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
6
 
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


 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
b
u
t
t
o
n
>




 
 
 
 
 
 
{
/
*
 
─
─
 
H
e
r
o
 
C
a
r
d
 
w
i
t
h
 
C
o
v
e
r
 
I
m
a
g
e
 
─
─
 
*
/
}


 
 
 
 
 
 
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
 
c
u
s
t
o
m
=
{
0
}
 
v
a
r
i
a
n
t
s
=
{
f
a
d
e
I
n
U
p
}
 
i
n
i
t
i
a
l
=
"
h
i
d
d
e
n
"
 
a
n
i
m
a
t
e
=
"
v
i
s
i
b
l
e
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
2
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
 
m
b
-
6
"
>


 
 
 
 
 
 
 
 
{
/
*
 
C
o
v
e
r
 
/
 
B
a
n
n
e
r
 
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
h
-
3
6
 
r
e
l
a
t
i
v
e
"
>


 
 
 
 
 
 
 
 
 
 
{
p
r
o
f
i
l
e
.
c
o
v
e
r
I
m
a
g
e
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
i
m
g
 
s
r
c
=
{
p
r
o
f
i
l
e
.
c
o
v
e
r
I
m
a
g
e
}
 
a
l
t
=
"
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
w
-
f
u
l
l
 
h
-
f
u
l
l
 
o
b
j
e
c
t
-
c
o
v
e
r
"
 
/
>


 
 
 
 
 
 
 
 
 
 
)
 
:
 
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
 
h
-
f
u
l
l
 
b
g
-
l
i
n
e
a
r
-
t
o
-
b
r
 
f
r
o
m
-
i
n
d
i
g
o
-
5
0
0
 
v
i
a
-
v
i
o
l
e
t
-
5
0
0
 
t
o
-
p
u
r
p
l
e
-
5
0
0
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
a
b
s
o
l
u
t
e
 
i
n
s
e
t
-
0
 
o
p
a
c
i
t
y
-
1
5
"
 
s
t
y
l
e
=
{
{
 
b
a
c
k
g
r
o
u
n
d
I
m
a
g
e
:
 
"
r
a
d
i
a
l
-
g
r
a
d
i
e
n
t
(
c
i
r
c
l
e
 
a
t
 
1
p
x
 
1
p
x
,
 
r
g
b
a
(
2
5
5
,
2
5
5
,
2
5
5
,
0
.
3
)
 
1
p
x
,
 
t
r
a
n
s
p
a
r
e
n
t
 
0
)
"
,
 
b
a
c
k
g
r
o
u
n
d
S
i
z
e
:
 
"
2
0
p
x
 
2
0
p
x
"
 
}
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
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
r
o
f
i
l
e
 
I
n
f
o
 
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
p
x
-
6
 
p
b
-
6
 
-
m
t
-
1
4
 
r
e
l
a
t
i
v
e
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
 
i
t
e
m
s
-
e
n
d
 
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
2
8
 
h
-
2
8
 
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
8
0
0
 
b
o
r
d
e
r
-
4
 
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
9
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
 
t
e
x
t
-
3
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
 
s
h
r
i
n
k
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
r
o
f
i
l
e
.
p
r
o
f
i
l
e
P
i
c
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
i
m
g
 
s
r
c
=
{
p
r
o
f
i
l
e
.
p
r
o
f
i
l
e
P
i
c
}
 
a
l
t
=
{
p
r
o
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
2
8
 
h
-
2
8
 
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
 
o
b
j
e
c
t
-
c
o
v
e
r
"
 
o
n
E
r
r
o
r
=
{
(
e
)
 
=
>
 
{
 
e
.
c
u
r
r
e
n
t
T
a
r
g
e
t
.
s
t
y
l
e
.
d
i
s
p
l
a
y
 
=
 
"
n
o
n
e
"
;
 
}
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
U
s
e
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
w
-
1
2
 
h
-
1
2
 
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
"
 
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
b
-
1
 
m
i
n
-
w
-
0
 
f
l
e
x
-
1
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
5
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
p
r
o
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
h
1
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
j
o
b
S
t
a
t
u
s
I
n
f
o
 
&
&
 
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
{
`
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
 
p
x
-
2
.
5
 
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
l
g
 
$
{
j
o
b
S
t
a
t
u
s
I
n
f
o
.
c
l
s
}
`
}
>
{
j
o
b
S
t
a
t
u
s
I
n
f
o
.
l
a
b
e
l
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
r
o
f
i
l
e
.
o
s
s
T
i
e
r
 
&
&
 
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
{
`
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
.
5
 
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
 
p
x
-
2
.
5
 
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
m
d
 
b
o
r
d
e
r
 
$
{
O
S
S
_
T
I
E
R
_
C
O
L
O
R
S
[
p
r
o
f
i
l
e
.
o
s
s
T
i
e
r
]
 
|
|
 
O
S
S
_
T
I
E
R
_
C
O
L
O
R
S
[
"
F
i
r
s
t
 
S
t
e
p
s
"
]
}
`
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
T
r
o
p
h
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
3
 
h
-
3
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
r
o
f
i
l
e
.
o
s
s
T
i
e
r
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
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
(
p
r
o
f
i
l
e
.
d
e
s
i
g
n
a
t
i
o
n
 
|
|
 
p
r
o
f
i
l
e
.
c
o
m
p
a
n
y
)
 
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
 
m
t
-
0
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
r
o
f
i
l
e
.
d
e
s
i
g
n
a
t
i
o
n
}
{
p
r
o
f
i
l
e
.
d
e
s
i
g
n
a
t
i
o
n
 
&
&
 
p
r
o
f
i
l
e
.
c
o
m
p
a
n
y
 
?
 
"
 
a
t
 
"
 
:
 
"
"
}
{
p
r
o
f
i
l
e
.
c
o
m
p
a
n
y
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
p
r
o
f
i
l
e
.
b
i
o
 
&
&
 
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
4
 
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
p
r
o
f
i
l
e
.
b
i
o
}
<
/
p
>
}




 
 
 
 
 
 
 
 
 
 
{
/
*
 
C
o
n
t
a
c
t
 
&
 
I
n
f
o
 
R
o
w
 
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
f
l
e
x
 
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
 
g
a
p
-
x
-
5
 
g
a
p
-
y
-
2
 
m
t
-
4
 
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
.
5
"
>
<
M
a
i
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
 
{
p
r
o
f
i
l
e
.
e
m
a
i
l
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
{
p
r
o
f
i
l
e
.
c
o
n
t
a
c
t
N
o
 
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
.
5
"
>
<
P
h
o
n
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
 
{
p
r
o
f
i
l
e
.
c
o
n
t
a
c
t
N
o
}
<
/
s
p
a
n
>
}


 
 
 
 
 
 
 
 
 
 
 
 
{
p
r
o
f
i
l
e
.
c
o
l
l
e
g
e
 
&
&
 
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
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
G
r
a
d
u
a
t
i
o
n
C
a
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
 
{
p
r
o
f
i
l
e
.
c
o
l
l
e
g
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
r
o
f
i
l
e
.
g
r
a
d
u
a
t
i
o
n
Y
e
a
r
 
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
o
p
a
c
i
t
y
-
7
0
"
>
(
{
p
r
o
f
i
l
e
.
g
r
a
d
u
a
t
i
o
n
Y
e
a
r
}
)
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
}


 
 
 
 
 
 
 
 
 
 
 
 
{
p
r
o
f
i
l
e
.
l
o
c
a
t
i
o
n
 
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
.
5
"
>
<
M
a
p
P
i
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
 
{
p
r
o
f
i
l
e
.
l
o
c
a
t
i
o
n
}
<
/
s
p
a
n
>
}


 
 
 
 
 
 
 
 
 
 
 
 
{
p
r
o
f
i
l
e
.
c
r
e
a
t
e
d
A
t
 
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
.
5
"
>
<
C
l
o
c
k
 
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
 
J
o
i
n
e
d
 
{
f
o
r
m
a
t
D
a
t
e
(
p
r
o
f
i
l
e
.
c
r
e
a
t
e
d
A
t
)
}
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
d
i
v
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
S
o
c
i
a
l
 
L
i
n
k
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
{
(
p
r
o
f
i
l
e
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
 
p
r
o
f
i
l
e
.
g
i
t
h
u
b
U
r
l
 
|
|
 
p
r
o
f
i
l
e
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
)
 
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
f
l
e
x
 
g
a
p
-
2
 
m
t
-
4
 
p
t
-
4
 
b
o
r
d
e
r
-
t
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
r
o
f
i
l
e
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
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
a
 
h
r
e
f
=
{
p
r
o
f
i
l
e
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
}
 
t
a
r
g
e
t
=
"
_
b
l
a
n
k
"
 
r
e
l
=
"
n
o
o
p
e
n
e
r
 
n
o
r
e
f
e
r
r
e
r
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
.
5
 
p
x
-
3
 
p
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
 
d
a
r
k
:
b
g
-
b
l
u
e
-
9
0
0
/
2
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
b
l
u
e
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
b
l
u
e
-
1
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
b
l
u
e
-
9
0
0
/
3
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
L
i
n
k
e
d
i
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
 
L
i
n
k
e
d
I
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
a
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
r
o
f
i
l
e
.
g
i
t
h
u
b
U
r
l
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
a
 
h
r
e
f
=
{
p
r
o
f
i
l
e
.
g
i
t
h
u
b
U
r
l
}
 
t
a
r
g
e
t
=
"
_
b
l
a
n
k
"
 
r
e
l
=
"
n
o
o
p
e
n
e
r
 
n
o
r
e
f
e
r
r
e
r
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
.
5
 
p
x
-
3
 
p
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
 
b
g
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
7
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
G
i
t
h
u
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
 
G
i
t
H
u
b


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
a
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
r
o
f
i
l
e
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
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
a
 
h
r
e
f
=
{
p
r
o
f
i
l
e
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
}
 
t
a
r
g
e
t
=
"
_
b
l
a
n
k
"
 
r
e
l
=
"
n
o
o
p
e
n
e
r
 
n
o
r
e
f
e
r
r
e
r
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
.
5
 
p
x
-
3
 
p
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
 
b
g
-
v
i
o
l
e
t
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
v
i
o
l
e
t
-
9
0
0
/
2
0
 
t
e
x
t
-
v
i
o
l
e
t
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
v
i
o
l
e
t
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
v
i
o
l
e
t
-
1
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
v
i
o
l
e
t
-
9
0
0
/
3
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
G
l
o
b
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
 
P
o
r
t
f
o
l
i
o


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
a
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
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




 
 
 
 
 
 
{
/
*
 
─
─
 
S
t
a
t
s
 
R
o
w
 
─
─
 
*
/
}


 
 
 
 
 
 
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
 
c
u
s
t
o
m
=
{
1
}
 
v
a
r
i
a
n
t
s
=
{
f
a
d
e
I
n
U
p
}
 
i
n
i
t
i
a
l
=
"
h
i
d
d
e
n
"
 
a
n
i
m
a
t
e
=
"
v
i
s
i
b
l
e
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
4
 
g
a
p
-
3
 
m
b
-
6
"
>


 
 
 
 
 
 
 
 
{
p
r
o
f
i
l
e
.
b
e
s
t
A
t
s
S
c
o
r
e
 
!
=
=
 
n
u
l
l
 
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
 
p
-
4
 
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
{
`
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
 
$
{
p
r
o
f
i
l
e
.
b
e
s
t
A
t
s
S
c
o
r
e
 
>
=
 
8
0
 
?
 
"
t
e
x
t
-
e
m
e
r
a
l
d
-
6
0
0
"
 
:
 
p
r
o
f
i
l
e
.
b
e
s
t
A
t
s
S
c
o
r
e
 
>
=
 
6
0
 
?
 
"
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
"
 
:
 
"
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
"
}
`
}
>
{
p
r
o
f
i
l
e
.
b
e
s
t
A
t
s
S
c
o
r
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
5
0
0
 
m
t
-
1
"
>
B
e
s
t
 
A
T
S
 
S
c
o
r
e
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
 
p
-
4
 
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
o
l
d
 
t
e
x
t
-
i
n
d
i
g
o
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
i
n
d
i
g
o
-
4
0
0
"
>
{
p
r
o
f
i
l
e
.
v
e
r
i
f
i
e
d
S
k
i
l
l
s
.
l
e
n
g
t
h
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
5
0
0
 
m
t
-
1
"
>
V
e
r
i
f
i
e
d
 
S
k
i
l
l
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
 
p
-
4
 
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
o
l
d
 
t
e
x
t
-
v
i
o
l
e
t
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
v
i
o
l
e
t
-
4
0
0
"
>
{
p
r
o
f
i
l
e
.
p
r
o
j
e
c
t
s
.
l
e
n
g
t
h
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
5
0
0
 
m
t
-
1
"
>
P
r
o
j
e
c
t
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
 
p
-
4
 
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
{
p
r
o
f
i
l
e
.
r
e
s
u
m
e
s
.
l
e
n
g
t
h
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
5
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
s
u
m
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




 
 
 
 
 
 
{
/
*
 
─
─
 
C
o
n
t
e
n
t
 
G
r
i
d
 
─
─
 
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
1
 
l
g
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
3
 
g
a
p
-
6
"
>


 
 
 
 
 
 
 
 
{
/
*
 
L
e
f
t
 
C
o
l
u
m
n
 
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
l
g
:
c
o
l
-
s
p
a
n
-
1
 
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


 
 
 
 
 
 
 
 
 
 
{
/
*
 
S
k
i
l
l
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
{
p
r
o
f
i
l
e
.
s
k
i
l
l
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
 
c
u
s
t
o
m
=
{
2
}
 
v
a
r
i
a
n
t
s
=
{
f
a
d
e
I
n
U
p
}
 
i
n
i
t
i
a
l
=
"
h
i
d
d
e
n
"
 
a
n
i
m
a
t
e
=
"
v
i
s
i
b
l
e
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
2
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
 
p
-
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
h
3
 
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
9
5
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
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
B
r
i
e
f
c
a
s
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
i
n
d
i
g
o
-
5
0
0
"
 
/
>
 
S
k
i
l
l
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
3
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
w
r
a
p
 
g
a
p
-
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
r
o
f
i
l
e
.
s
k
i
l
l
s
.
m
a
p
(
(
s
k
i
l
l
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
v
 
=
 
v
e
r
i
f
i
e
d
M
a
p
.
g
e
t
(
s
k
i
l
l
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
s
p
a
n
 
k
e
y
=
{
s
k
i
l
l
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
 
t
e
x
t
-
x
s
 
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
 
$
{
v
 
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
 
"
b
g
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
"
}
`
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
v
 
&
&
 
<
S
h
i
e
l
d
C
h
e
c
k
 
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
 
h
-
3
"
 
/
>
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
k
i
l
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
v
 
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
[
1
0
p
x
]
 
o
p
a
c
i
t
y
-
7
0
"
>
{
v
.
s
c
o
r
e
}
%
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
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
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




 
 
 
 
 
 
 
 
 
 
{
/
*
 
R
e
s
u
m
e
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
{
p
r
o
f
i
l
e
.
r
e
s
u
m
e
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
 
c
u
s
t
o
m
=
{
3
}
 
v
a
r
i
a
n
t
s
=
{
f
a
d
e
I
n
U
p
}
 
i
n
i
t
i
a
l
=
"
h
i
d
d
e
n
"
 
a
n
i
m
a
t
e
=
"
v
i
s
i
b
l
e
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
2
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
 
p
-
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
h
3
 
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
9
5
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
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
F
i
l
e
T
e
x
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
 
t
e
x
t
-
v
i
o
l
e
t
-
5
0
0
"
 
/
>
 
R
e
s
u
m
e
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
3
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
s
p
a
c
e
-
y
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
r
o
f
i
l
e
.
r
e
s
u
m
e
s
.
m
a
p
(
(
u
r
l
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
a
 
k
e
y
=
{
u
r
l
}
 
h
r
e
f
=
{
u
r
l
}
 
t
a
r
g
e
t
=
"
_
b
l
a
n
k
"
 
r
e
l
=
"
n
o
o
p
e
n
e
r
 
n
o
r
e
f
e
r
r
e
r
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
.
5
 
p
x
-
3
 
p
y
-
2
.
5
 
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
i
n
d
i
g
o
-
2
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
i
n
d
i
g
o
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
7
 
h
-
7
 
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
 
b
g
-
i
n
d
i
g
o
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
i
n
d
i
g
o
-
9
0
0
/
2
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
c
e
n
t
e
r
 
s
h
r
i
n
k
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
F
i
l
e
T
e
x
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
3
.
5
 
h
-
3
.
5
 
t
e
x
t
-
i
n
d
i
g
o
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
i
n
d
i
g
o
-
4
0
0
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
 
t
r
u
n
c
a
t
e
 
f
l
e
x
-
1
"
>
{
g
e
t
F
i
l
e
N
a
m
e
F
r
o
m
U
r
l
(
u
r
l
)
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
E
x
t
e
r
n
a
l
L
i
n
k
 
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
 
h
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
a
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




 
 
 
 
 
 
 
 
 
 
{
/
*
 
B
a
d
g
e
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
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
 
c
u
s
t
o
m
=
{
4
}
 
v
a
r
i
a
n
t
s
=
{
f
a
d
e
I
n
U
p
}
 
i
n
i
t
i
a
l
=
"
h
i
d
d
e
n
"
 
a
n
i
m
a
t
e
=
"
v
i
s
i
b
l
e
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
2
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
 
p
-
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
B
a
d
g
e
s
S
e
c
t
i
o
n
 
s
t
u
d
e
n
t
I
d
=
{
p
r
o
f
i
l
e
.
i
d
}
 
/
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
 
c
u
s
t
o
m
=
{
5
}
 
v
a
r
i
a
n
t
s
=
{
f
a
d
e
I
n
U
p
}
 
i
n
i
t
i
a
l
=
"
h
i
d
d
e
n
"
 
a
n
i
m
a
t
e
=
"
v
i
s
i
b
l
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
G
i
t
H
u
b
S
t
a
t
s
C
a
r
d
 
g
i
t
h
u
b
U
r
l
=
{
p
r
o
f
i
l
e
.
g
i
t
h
u
b
U
r
l
}
 
c
o
m
p
a
c
t
 
/
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
i
g
h
t
 
C
o
l
u
m
n
 
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
l
g
:
c
o
l
-
s
p
a
n
-
2
 
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


 
 
 
 
 
 
 
 
 
 
{
/
*
 
C
o
d
i
n
g
 
A
c
t
i
v
i
t
y
 
*
/
}


 
 
 
 
 
 
 
 
 
 
{
p
r
o
f
i
l
e
.
g
i
t
h
u
b
U
r
l
 
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
 
c
u
s
t
o
m
=
{
2
}
 
v
a
r
i
a
n
t
s
=
{
f
a
d
e
I
n
U
p
}
 
i
n
i
t
i
a
l
=
"
h
i
d
d
e
n
"
 
a
n
i
m
a
t
e
=
"
v
i
s
i
b
l
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
o
n
t
r
i
b
u
t
i
o
n
G
r
a
p
h
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
g
i
t
h
u
b
U
s
e
r
n
a
m
e
=
{
p
r
o
f
i
l
e
.
g
i
t
h
u
b
U
r
l
.
s
p
l
i
t
(
"
g
i
t
h
u
b
.
c
o
m
/
"
)
.
p
o
p
(
)
?
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
\
/
$
/
,
 
"
"
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
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




 
 
 
 
 
 
 
 
 
 
{
/
*
 
O
p
e
n
 
S
o
u
r
c
e
 
C
o
n
t
r
i
b
u
t
i
o
n
 
H
e
a
t
m
a
p
 
*
/
}


 
 
 
 
 
 
 
 
 
 
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
 
c
u
s
t
o
m
=
{
2
.
5
}
 
v
a
r
i
a
n
t
s
=
{
f
a
d
e
I
n
U
p
}
 
i
n
i
t
i
a
l
=
"
h
i
d
d
e
n
"
 
a
n
i
m
a
t
e
=
"
v
i
s
i
b
l
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
O
s
s
C
o
n
t
r
i
b
u
t
i
o
n
H
e
a
t
m
a
p
 
c
o
m
p
a
c
t
 
s
t
u
d
e
n
t
I
d
=
{
p
r
o
f
i
l
e
.
i
d
}
 
/
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




 
 
 
 
 
 
 
 
 
 
{
/
*
 
P
r
o
j
e
c
t
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
{
p
r
o
f
i
l
e
.
p
r
o
j
e
c
t
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
 
c
u
s
t
o
m
=
{
3
}
 
v
a
r
i
a
n
t
s
=
{
f
a
d
e
I
n
U
p
}
 
i
n
i
t
i
a
l
=
"
h
i
d
d
e
n
"
 
a
n
i
m
a
t
e
=
"
v
i
s
i
b
l
e
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
2
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
 
p
-
6
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
h
3
 
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
9
5
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
4
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
G
S
S
o
C
 
'
2
6
:
 
U
p
d
a
t
e
d
 
t
i
t
l
e
 
t
o
 
F
e
a
t
u
r
e
d
 
P
r
o
j
e
c
t
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
F
o
l
d
e
r
G
i
t
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
 
/
>
 
F
e
a
t
u
r
e
d
 
P
r
o
j
e
c
t
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
3
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
p
r
o
f
i
l
e
.
p
r
o
j
e
c
t
s
.
m
a
p
(
(
p
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
p
.
i
d
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
4
 
p
y
-
3
 
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
7
0
0
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
 
m
b
-
0
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
h
4
 
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
9
5
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
p
.
t
i
t
l
e
}
<
/
h
4
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
.
b
u
i
l
t
A
t
 
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
 
s
h
r
i
n
k
-
0
"
>
<
C
a
l
e
n
d
a
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
w
-
3
 
h
-
3
"
 
/
>
 
{
p
.
b
u
i
l
t
A
t
}
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
d
i
v
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
 
l
i
n
e
-
c
l
a
m
p
-
2
"
>
{
p
.
d
e
s
c
r
i
p
t
i
o
n
}
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
.
t
e
c
h
S
t
a
c
k
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
w
r
a
p
 
g
a
p
-
1
 
m
t
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
.
t
e
c
h
S
t
a
c
k
.
m
a
p
(
(
t
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
"
>
{
t
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
(
p
.
l
i
v
e
U
r
l
 
|
|
 
p
.
r
e
p
o
U
r
l
)
 
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
f
l
e
x
 
g
a
p
-
3
 
m
t
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
.
l
i
v
e
U
r
l
 
&
&
 
<
a
 
h
r
e
f
=
{
p
.
l
i
v
e
U
r
l
}
 
t
a
r
g
e
t
=
"
_
b
l
a
n
k
"
 
r
e
l
=
"
n
o
o
p
e
n
e
r
 
n
o
r
e
f
e
r
r
e
r
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
x
s
 
t
e
x
t
-
i
n
d
i
g
o
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
i
n
d
i
g
o
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
u
n
d
e
r
l
i
n
e
 
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
E
x
t
e
r
n
a
l
L
i
n
k
 
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
 
h
-
3
"
 
/
>
 
L
i
v
e
<
/
a
>
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
.
r
e
p
o
U
r
l
 
&
&
 
<
a
 
h
r
e
f
=
{
p
.
r
e
p
o
U
r
l
}
 
t
a
r
g
e
t
=
"
_
b
l
a
n
k
"
 
r
e
l
=
"
n
o
o
p
e
n
e
r
 
n
o
r
e
f
e
r
r
e
r
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
u
n
d
e
r
l
i
n
e
 
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
G
i
t
h
u
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
3
 
h
-
3
"
 
/
>
 
C
o
d
e
<
/
a
>
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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




 
 
 
 
 
 
 
 
 
 
{
/
*
 
A
c
h
i
e
v
e
m
e
n
t
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
{
p
r
o
f
i
l
e
.
a
c
h
i
e
v
e
m
e
n
t
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
 
c
u
s
t
o
m
=
{
4
}
 
v
a
r
i
a
n
t
s
=
{
f
a
d
e
I
n
U
p
}
 
i
n
i
t
i
a
l
=
"
h
i
d
d
e
n
"
 
a
n
i
m
a
t
e
=
"
v
i
s
i
b
l
e
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
2
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
 
p
-
6
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
h
3
 
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
9
5
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
4
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
T
r
o
p
h
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
5
0
0
"
 
/
>
 
A
c
h
i
e
v
e
m
e
n
t
s
 
&
 
L
e
a
d
e
r
s
h
i
p


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
3
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
s
p
a
c
e
-
y
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
r
o
f
i
l
e
.
a
c
h
i
e
v
e
m
e
n
t
s
.
m
a
p
(
(
a
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
a
.
i
d
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
x
-
4
 
p
y
-
3
 
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
7
0
0
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
w
-
8
 
h
-
8
 
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
9
0
0
/
2
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
c
e
n
t
e
r
 
s
h
r
i
n
k
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
T
r
o
p
h
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
r
o
s
e
-
4
0
0
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
i
n
-
w
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
h
4
 
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
9
5
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
a
.
t
i
t
l
e
}
<
/
h
4
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
 
m
t
-
0
.
5
"
>
{
a
.
d
e
s
c
r
i
p
t
i
o
n
}
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
a
.
d
a
t
e
 
&
&
 
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
[
1
0
p
x
]
 
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
 
m
t
-
1
 
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
C
a
l
e
n
d
a
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
w
-
3
 
h
-
3
"
 
/
>
 
{
a
.
d
a
t
e
}
<
/
p
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


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}


