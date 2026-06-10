
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
l
i
n
k
e
d
-
l
i
s
t
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
 
 
T
y
p
e
s
 
/
 
F
r
a
m
e
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
M
o
d
e
 
=
 
"
d
o
u
b
l
y
"
 
|
 
"
c
i
r
c
u
l
a
r
"
 
|
 
"
f
l
o
y
d
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


 
 
h
i
g
h
l
i
g
h
t
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


 
 
v
a
l
u
e
s
:
 
n
u
m
b
e
r
[
]
;


 
 
s
l
o
w
?
:
 
n
u
m
b
e
r
;


 
 
f
a
s
t
?
:
 
n
u
m
b
e
r
;


 
 
h
a
s
C
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


 
 
c
y
c
l
e
S
t
a
r
t
?
:
 
n
u
m
b
e
r
;


 
 
m
e
t
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
 
P
S
E
U
D
O
_
F
L
O
Y
D
 
=
 
[


 
 
"
f
u
n
c
t
i
o
n
 
h
a
s
C
y
c
l
e
(
h
e
a
d
)
:
"
,


 
 
"
 
 
s
l
o
w
 
←
 
h
e
a
d
;
 
f
a
s
t
 
←
 
h
e
a
d
"
,


 
 
"
 
 
w
h
i
l
e
 
f
a
s
t
 
!
=
 
n
u
l
l
 
a
n
d
 
f
a
s
t
.
n
e
x
t
 
!
=
 
n
u
l
l
:
"
,


 
 
"
 
 
 
 
s
l
o
w
 
←
 
s
l
o
w
.
n
e
x
t
"
,


 
 
"
 
 
 
 
f
a
s
t
 
←
 
f
a
s
t
.
n
e
x
t
.
n
e
x
t
"
,


 
 
"
 
 
 
 
i
f
 
s
l
o
w
 
=
=
 
f
a
s
t
:
"
,


 
 
"
 
 
 
 
 
 
r
e
t
u
r
n
 
t
r
u
e
"
,


 
 
"
 
 
r
e
t
u
r
n
 
f
a
l
s
e
"
,


]
;




c
o
n
s
t
 
P
S
E
U
D
O
_
D
O
U
B
L
Y
_
I
N
S
E
R
T
 
=
 
[


 
 
"
f
u
n
c
t
i
o
n
 
i
n
s
e
r
t
A
f
t
e
r
(
n
o
d
e
,
 
v
a
l
u
e
)
:
"
,


 
 
"
 
 
n
e
w
 
←
 
N
o
d
e
(
v
a
l
u
e
)
"
,


 
 
"
 
 
n
e
w
.
p
r
e
v
 
←
 
n
o
d
e
"
,


 
 
"
 
 
n
e
w
.
n
e
x
t
 
←
 
n
o
d
e
.
n
e
x
t
"
,


 
 
"
 
 
i
f
 
n
o
d
e
.
n
e
x
t
 
!
=
 
n
u
l
l
:
"
,


 
 
"
 
 
 
 
n
o
d
e
.
n
e
x
t
.
p
r
e
v
 
←
 
n
e
w
"
,


 
 
"
 
 
n
o
d
e
.
n
e
x
t
 
←
 
n
e
w
"
,


]
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
 
 
F
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
 
b
u
i
l
d
D
o
u
b
l
y
D
e
m
o
(
v
a
l
u
e
s
:
 
n
u
m
b
e
r
[
]
,
 
a
f
t
e
r
I
d
x
:
 
n
u
m
b
e
r
,
 
n
e
w
V
a
l
:
 
n
u
m
b
e
r
)
:
 
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


 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
0
,
 
v
a
r
s
:
 
{
 
a
f
t
e
r
:
 
v
a
l
u
e
s
[
a
f
t
e
r
I
d
x
]
,
 
v
a
l
u
e
:
 
n
e
w
V
a
l
 
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
 
`
I
n
s
e
r
t
 
$
{
n
e
w
V
a
l
}
 
a
f
t
e
r
 
n
o
d
e
 
a
t
 
p
o
s
i
t
i
o
n
 
$
{
a
f
t
e
r
I
d
x
}
`
,
 
v
a
l
u
e
s
,
 
s
l
o
w
:
 
a
f
t
e
r
I
d
x
 
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
{
 
l
i
n
e
:
 
1
,
 
v
a
r
s
:
 
{
 
n
e
w
:
 
n
e
w
V
a
l
 
}
,
 
h
i
g
h
l
i
g
h
t
K
e
y
:
 
"
n
e
w
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
 
`
A
l
l
o
c
a
t
e
 
n
e
w
 
n
o
d
e
 
w
i
t
h
 
v
a
l
u
e
 
$
{
n
e
w
V
a
l
}
`
,
 
v
a
l
u
e
s
,
 
s
l
o
w
:
 
a
f
t
e
r
I
d
x
 
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
{
 
l
i
n
e
:
 
2
,
 
v
a
r
s
:
 
{
 
"
n
e
w
.
p
r
e
v
"
:
 
v
a
l
u
e
s
[
a
f
t
e
r
I
d
x
]
 
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
 
`
n
e
w
.
p
r
e
v
 
←
 
n
o
d
e
 
(
$
{
v
a
l
u
e
s
[
a
f
t
e
r
I
d
x
]
}
)
`
,
 
v
a
l
u
e
s
,
 
s
l
o
w
:
 
a
f
t
e
r
I
d
x
 
}
)
;


 
 
c
o
n
s
t
 
n
x
t
 
=
 
v
a
l
u
e
s
[
a
f
t
e
r
I
d
x
 
+
 
1
]
;


 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
3
,
 
v
a
r
s
:
 
{
 
"
n
e
w
.
n
e
x
t
"
:
 
n
x
t
 
?
?
 
"
n
u
l
l
"
 
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
 
`
n
e
w
.
n
e
x
t
 
←
 
n
o
d
e
.
n
e
x
t
 
(
$
{
n
x
t
 
?
?
 
"
n
u
l
l
"
}
)
`
,
 
v
a
l
u
e
s
,
 
s
l
o
w
:
 
a
f
t
e
r
I
d
x
 
}
)
;


 
 
i
f
 
(
n
x
t
 
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
)
 
{


 
 
 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
4
,
 
v
a
r
s
:
 
{
 
"
n
o
d
e
.
n
e
x
t
.
p
r
e
v
"
:
 
n
e
w
V
a
l
 
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
 
"
R
e
w
i
r
e
 
n
o
d
e
.
n
e
x
t
.
p
r
e
v
 
←
 
n
e
w
"
,
 
v
a
l
u
e
s
,
 
s
l
o
w
:
 
a
f
t
e
r
I
d
x
 
}
)
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
{
 
l
i
n
e
:
 
4
,
 
v
a
r
s
:
 
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
 
"
n
o
d
e
.
n
e
x
t
 
i
s
 
n
u
l
l
,
 
s
k
i
p
 
b
a
c
k
w
a
r
d
 
r
e
w
i
r
e
"
,
 
v
a
l
u
e
s
,
 
s
l
o
w
:
 
a
f
t
e
r
I
d
x
 
}
)
;


 
 
}


 
 
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
2
 
=
 
[
.
.
.
v
a
l
u
e
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
 
a
f
t
e
r
I
d
x
 
+
 
1
)
,
 
n
e
w
V
a
l
,
 
.
.
.
v
a
l
u
e
s
.
s
l
i
c
e
(
a
f
t
e
r
I
d
x
 
+
 
1
)
]
;


 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
6
,
 
v
a
r
s
:
 
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
 
"
n
o
d
e
.
n
e
x
t
 
←
 
n
e
w
,
 
i
n
s
e
r
t
i
o
n
 
c
o
m
p
l
e
t
e
"
,
 
v
a
l
u
e
s
:
 
v
a
l
u
e
s
2
,
 
s
l
o
w
:
 
a
f
t
e
r
I
d
x
 
+
 
1
 
}
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
F
l
o
y
d
(
v
a
l
u
e
s
:
 
n
u
m
b
e
r
[
]
,
 
c
y
c
l
e
S
t
a
r
t
:
 
n
u
m
b
e
r
)
:
 
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
 
n
 
=
 
v
a
l
u
e
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
f
 
(
n
 
=
=
=
 
0
)
 
{


 
 
 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
0
,
 
v
a
r
s
:
 
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
 
"
E
m
p
t
y
 
l
i
s
t
"
,
 
v
a
l
u
e
s
 
}
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


 
 
c
o
n
s
t
 
n
e
x
t
I
d
x
 
=
 
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
 
=
>
 
{


 
 
 
 
i
f
 
(
i
 
=
=
=
 
n
 
-
 
1
)
 
r
e
t
u
r
n
 
c
y
c
l
e
S
t
a
r
t
 
>
=
 
0
 
?
 
c
y
c
l
e
S
t
a
r
t
 
:
 
n
u
l
l
;


 
 
 
 
r
e
t
u
r
n
 
i
 
+
 
1
;


 
 
}
;


 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
0
,
 
v
a
r
s
:
 
{
 
h
e
a
d
:
 
v
a
l
u
e
s
[
0
]
 
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
 
c
y
c
l
e
S
t
a
r
t
 
>
=
 
0
 
?
 
`
S
u
s
p
e
c
t
 
c
y
c
l
e
 
s
t
a
r
t
i
n
g
 
a
t
 
i
n
d
e
x
 
$
{
c
y
c
l
e
S
t
a
r
t
}
`
 
:
 
"
N
o
 
c
y
c
l
e
 
e
x
p
e
c
t
e
d
"
,
 
v
a
l
u
e
s
,
 
c
y
c
l
e
S
t
a
r
t
:
 
c
y
c
l
e
S
t
a
r
t
 
>
=
 
0
 
?
 
c
y
c
l
e
S
t
a
r
t
 
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
 
h
a
s
C
y
c
l
e
:
 
c
y
c
l
e
S
t
a
r
t
 
>
=
 
0
 
}
)
;


 
 
l
e
t
 
s
l
o
w
 
=
 
0
,
 
f
a
s
t
 
=
 
0
;


 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
1
,
 
v
a
r
s
:
 
{
 
s
l
o
w
:
 
v
a
l
u
e
s
[
s
l
o
w
]
,
 
f
a
s
t
:
 
v
a
l
u
e
s
[
f
a
s
t
]
 
}
,
 
h
i
g
h
l
i
g
h
t
K
e
y
:
 
"
s
l
o
w
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
 
"
B
o
t
h
 
p
o
i
n
t
e
r
s
 
s
t
a
r
t
 
a
t
 
h
e
a
d
"
,
 
v
a
l
u
e
s
,
 
s
l
o
w
,
 
f
a
s
t
,
 
c
y
c
l
e
S
t
a
r
t
:
 
c
y
c
l
e
S
t
a
r
t
 
>
=
 
0
 
?
 
c
y
c
l
e
S
t
a
r
t
 
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
 
h
a
s
C
y
c
l
e
:
 
c
y
c
l
e
S
t
a
r
t
 
>
=
 
0
 
}
)
;


 
 
l
e
t
 
s
a
f
e
t
y
 
=
 
0
;


 
 
w
h
i
l
e
 
(
s
a
f
e
t
y
+
+
 
<
 
4
0
)
 
{


 
 
 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
2
,
 
v
a
r
s
:
 
{
 
s
l
o
w
:
 
v
a
l
u
e
s
[
s
l
o
w
]
,
 
f
a
s
t
:
 
v
a
l
u
e
s
[
f
a
s
t
]
 
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
 
"
C
h
e
c
k
:
 
f
a
s
t
 
a
n
d
 
f
a
s
t
.
n
e
x
t
 
n
o
t
 
n
u
l
l
?
"
,
 
v
a
l
u
e
s
,
 
s
l
o
w
,
 
f
a
s
t
,
 
c
y
c
l
e
S
t
a
r
t
:
 
c
y
c
l
e
S
t
a
r
t
 
>
=
 
0
 
?
 
c
y
c
l
e
S
t
a
r
t
 
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
 
h
a
s
C
y
c
l
e
:
 
c
y
c
l
e
S
t
a
r
t
 
>
=
 
0
 
}
)
;


 
 
 
 
c
o
n
s
t
 
s
1
 
=
 
n
e
x
t
I
d
x
(
s
l
o
w
)
;


 
 
 
 
c
o
n
s
t
 
f
a
 
=
 
n
e
x
t
I
d
x
(
f
a
s
t
)
;


 
 
 
 
c
o
n
s
t
 
f
b
 
=
 
f
a
 
=
=
=
 
n
u
l
l
 
?
 
n
u
l
l
 
:
 
n
e
x
t
I
d
x
(
f
a
)
;


 
 
 
 
i
f
 
(
f
a
 
=
=
=
 
n
u
l
l
 
|
|
 
f
b
 
=
=
=
 
n
u
l
l
)
 
{


 
 
 
 
 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
7
,
 
v
a
r
s
:
 
{
 
r
e
s
u
l
t
:
 
"
f
a
l
s
e
"
 
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
 
"
f
a
s
t
 
r
e
a
c
h
e
d
 
n
u
l
l
,
 
n
o
 
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
"
,
 
v
a
l
u
e
s
,
 
s
l
o
w
,
 
f
a
s
t
,
 
c
y
c
l
e
S
t
a
r
t
:
 
c
y
c
l
e
S
t
a
r
t
 
>
=
 
0
 
?
 
c
y
c
l
e
S
t
a
r
t
 
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
 
h
a
s
C
y
c
l
e
:
 
f
a
l
s
e
 
}
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


 
 
 
 
s
l
o
w
 
=
 
s
1
 
?
?
 
s
l
o
w
;


 
 
 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
3
,
 
v
a
r
s
:
 
{
 
s
l
o
w
:
 
v
a
l
u
e
s
[
s
l
o
w
]
 
}
,
 
h
i
g
h
l
i
g
h
t
K
e
y
:
 
"
s
l
o
w
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
 
`
s
l
o
w
 
m
o
v
e
s
 
o
n
e
 
s
t
e
p
 
→
 
$
{
v
a
l
u
e
s
[
s
l
o
w
]
}
`
,
 
v
a
l
u
e
s
,
 
s
l
o
w
,
 
f
a
s
t
,
 
c
y
c
l
e
S
t
a
r
t
:
 
c
y
c
l
e
S
t
a
r
t
 
>
=
 
0
 
?
 
c
y
c
l
e
S
t
a
r
t
 
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
 
h
a
s
C
y
c
l
e
:
 
c
y
c
l
e
S
t
a
r
t
 
>
=
 
0
 
}
)
;


 
 
 
 
f
a
s
t
 
=
 
f
b
;


 
 
 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
4
,
 
v
a
r
s
:
 
{
 
f
a
s
t
:
 
v
a
l
u
e
s
[
f
a
s
t
]
 
}
,
 
h
i
g
h
l
i
g
h
t
K
e
y
:
 
"
f
a
s
t
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
 
`
f
a
s
t
 
m
o
v
e
s
 
t
w
o
 
s
t
e
p
s
 
→
 
$
{
v
a
l
u
e
s
[
f
a
s
t
]
}
`
,
 
v
a
l
u
e
s
,
 
s
l
o
w
,
 
f
a
s
t
,
 
c
y
c
l
e
S
t
a
r
t
:
 
c
y
c
l
e
S
t
a
r
t
 
>
=
 
0
 
?
 
c
y
c
l
e
S
t
a
r
t
 
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
 
h
a
s
C
y
c
l
e
:
 
c
y
c
l
e
S
t
a
r
t
 
>
=
 
0
 
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
{
 
l
i
n
e
:
 
5
,
 
v
a
r
s
:
 
{
 
s
l
o
w
:
 
v
a
l
u
e
s
[
s
l
o
w
]
,
 
f
a
s
t
:
 
v
a
l
u
e
s
[
f
a
s
t
]
 
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
 
`
C
o
m
p
a
r
e
 
p
o
i
n
t
e
r
s
:
 
$
{
v
a
l
u
e
s
[
s
l
o
w
]
}
 
v
s
 
$
{
v
a
l
u
e
s
[
f
a
s
t
]
}
`
,
 
v
a
l
u
e
s
,
 
s
l
o
w
,
 
f
a
s
t
,
 
c
y
c
l
e
S
t
a
r
t
:
 
c
y
c
l
e
S
t
a
r
t
 
>
=
 
0
 
?
 
c
y
c
l
e
S
t
a
r
t
 
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
 
h
a
s
C
y
c
l
e
:
 
c
y
c
l
e
S
t
a
r
t
 
>
=
 
0
 
}
)
;


 
 
 
 
i
f
 
(
s
l
o
w
 
=
=
=
 
f
a
s
t
)
 
{


 
 
 
 
 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
6
,
 
v
a
r
s
:
 
{
 
r
e
s
u
l
t
:
 
"
t
r
u
e
"
 
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
 
`
P
o
i
n
t
e
r
s
 
m
e
e
t
 
a
t
 
$
{
v
a
l
u
e
s
[
s
l
o
w
]
}
,
 
c
y
c
l
e
 
c
o
n
f
i
r
m
e
d
`
,
 
v
a
l
u
e
s
,
 
s
l
o
w
,
 
f
a
s
t
,
 
m
e
t
:
 
t
r
u
e
,
 
c
y
c
l
e
S
t
a
r
t
:
 
c
y
c
l
e
S
t
a
r
t
 
>
=
 
0
 
?
 
c
y
c
l
e
S
t
a
r
t
 
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
 
h
a
s
C
y
c
l
e
:
 
t
r
u
e
 
}
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
L
i
s
t
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
:
 
n
u
m
b
e
r
[
]
 
{


 
 
r
e
t
u
r
n
 
s
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
x
)
 
=
>
 
N
u
m
b
e
r
(
x
.
t
r
i
m
(
)
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
(
x
)
 
=
>
 
!
N
u
m
b
e
r
.
i
s
N
a
N
(
x
)
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
i
s
t
 
v
i
z
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
i
s
t
V
i
z
(
{
 
f
r
a
m
e
,
 
m
o
d
e
 
}
:
 
{
 
f
r
a
m
e
:
 
F
r
a
m
e
;
 
m
o
d
e
:
 
M
o
d
e
 
}
)
 
{


 
 
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
W
 
=
 
9
6
,
 
N
O
D
E
_
H
 
=
 
5
4
,
 
G
A
P
 
=
 
4
0
;


 
 
c
o
n
s
t
 
n
 
=
 
f
r
a
m
e
.
v
a
l
u
e
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
f
 
(
n
 
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
 
t
e
x
t
-
s
m
"
>
E
m
p
t
y
 
l
i
s
t
<
/
d
i
v
>
;




 
 
i
f
 
(
m
o
d
e
 
=
=
=
 
"
c
i
r
c
u
l
a
r
"
 
|
|
 
(
m
o
d
e
 
=
=
=
 
"
f
l
o
y
d
"
 
&
&
 
f
r
a
m
e
.
h
a
s
C
y
c
l
e
)
)
 
{


 
 
 
 
c
o
n
s
t
 
R
A
D
_
X
 
=
 
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
5
0
,
 
n
 
*
 
2
2
)
;


 
 
 
 
c
o
n
s
t
 
R
A
D
_
Y
 
=
 
1
1
0
;


 
 
 
 
c
o
n
s
t
 
c
x
 
=
 
R
A
D
_
X
 
+
 
4
0
,
 
c
y
 
=
 
R
A
D
_
Y
 
+
 
4
0
;


 
 
 
 
c
o
n
s
t
 
w
i
d
t
h
 
=
 
2
 
*
 
R
A
D
_
X
 
+
 
1
2
0
;


 
 
 
 
c
o
n
s
t
 
h
e
i
g
h
t
 
=
 
2
 
*
 
R
A
D
_
Y
 
+
 
1
2
0
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
w
i
d
t
h
}
 
h
e
i
g
h
t
=
{
h
e
i
g
h
t
}
 
s
t
y
l
e
=
{
{
 
d
i
s
p
l
a
y
:
 
"
b
l
o
c
k
"
,
 
m
a
r
g
i
n
:
 
"
0
 
a
u
t
o
"
,
 
m
i
n
W
i
d
t
h
:
 
w
i
d
t
h
 
}
}
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
c
"
 
v
i
e
w
B
o
x
=
"
0
 
0
 
1
0
 
1
0
"
 
r
e
f
X
=
"
9
"
 
r
e
f
Y
=
"
5
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
6
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
6
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
-
s
t
a
r
t
-
r
e
v
e
r
s
e
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
1
0
,
5
 
L
0
,
1
0
 
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
t
e
x
t
M
u
t
e
d
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
/
d
e
f
s
>


 
 
 
 
 
 
 
 
 
 
{
f
r
a
m
e
.
v
a
l
u
e
s
.
m
a
p
(
(
_
v
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
 
n
e
x
t
 
=
 
(
i
 
+
 
1
)
 
%
 
n
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
t
a
r
g
e
t
 
=
 
f
r
a
m
e
.
c
y
c
l
e
S
t
a
r
t
 
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
 
i
 
=
=
=
 
n
 
-
 
1
 
?
 
f
r
a
m
e
.
c
y
c
l
e
S
t
a
r
t
 
:
 
n
e
x
t
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
a
1
 
=
 
(
i
 
/
 
n
)
 
*
 
2
 
*
 
M
a
t
h
.
P
I
 
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


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
a
2
 
=
 
(
t
a
r
g
e
t
 
/
 
n
)
 
*
 
2
 
*
 
M
a
t
h
.
P
I
 
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


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
x
1
 
=
 
c
x
 
+
 
(
R
A
D
_
X
 
-
 
2
0
)
 
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
1
)
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
y
1
 
=
 
c
y
 
+
 
(
R
A
D
_
Y
 
-
 
2
0
)
 
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
1
)
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
x
2
 
=
 
c
x
 
+
 
(
R
A
D
_
X
 
-
 
2
0
)
 
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
2
)
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
y
2
 
=
 
c
y
 
+
 
(
R
A
D
_
Y
 
-
 
2
0
)
 
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
2
)
;


 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
m
o
d
e
 
=
=
=
 
"
f
l
o
y
d
"
 
&
&
 
!
f
r
a
m
e
.
h
a
s
C
y
c
l
e
 
&
&
 
i
 
=
=
=
 
n
 
-
 
1
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


 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
a
t
h
 
k
e
y
=
{
`
e
$
{
i
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
=
{
`
M
$
{
x
1
}
,
$
{
y
1
}
 
Q
$
{
c
x
}
,
$
{
c
y
}
 
$
{
x
2
}
,
$
{
y
2
}
`
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
t
e
x
t
M
u
t
e
d
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
8
}
 
f
i
l
l
=
"
n
o
n
e
"
 
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
c
)
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
 
 
 
 
{
f
r
a
m
e
.
v
a
l
u
e
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
 
{


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
a
 
=
 
(
i
 
/
 
n
)
 
*
 
2
 
*
 
M
a
t
h
.
P
I
 
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


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
x
 
=
 
c
x
 
+
 
R
A
D
_
X
 
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
)
 
-
 
N
O
D
E
_
W
 
/
 
2
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
y
 
=
 
c
y
 
+
 
R
A
D
_
Y
 
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
)
 
-
 
N
O
D
E
_
H
 
/
 
2
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
S
l
o
w
 
=
 
f
r
a
m
e
.
s
l
o
w
 
=
=
=
 
i
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
F
a
s
t
 
=
 
f
r
a
m
e
.
f
a
s
t
 
=
=
=
 
i
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
m
e
t
 
=
 
f
r
a
m
e
.
m
e
t
 
&
&
 
i
s
S
l
o
w
 
&
&
 
i
s
F
a
s
t
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
 
=
 
m
e
t
 
?
 
"
#
1
0
b
9
8
1
"
 
:
 
i
s
S
l
o
w
 
&
&
 
i
s
F
a
s
t
 
?
 
"
#
1
0
b
9
8
1
"
 
:
 
i
s
S
l
o
w
 
?
 
"
#
3
b
8
2
f
6
"
 
:
 
i
s
F
a
s
t
 
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
a
c
c
e
n
t
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
b
g
 
=
 
m
e
t
 
?
 
"
r
g
b
a
(
1
6
,
1
8
5
,
1
2
9
,
0
.
1
8
)
"
 
:
 
i
s
S
l
o
w
 
|
|
 
i
s
F
a
s
t
 
?
 
`
$
{
c
}
2
2
`
 
:
 
T
H
E
M
E
.
b
g
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
S
t
r
i
n
g
(
v
)
 
+
 
"
_
"
 
+
 
i
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
r
e
c
t
 
x
=
{
x
}
 
y
=
{
y
}
 
w
i
d
t
h
=
{
N
O
D
E
_
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
N
O
D
E
_
H
}
 
r
x
=
{
8
}
 
f
i
l
l
=
{
b
g
}
 
s
t
r
o
k
e
=
{
c
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
2
.
2
}
 
s
t
y
l
e
=
{
{
 
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
 
"
a
l
l
 
0
.
3
s
"
 
}
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
x
 
+
 
N
O
D
E
_
W
 
/
 
2
}
 
y
=
{
y
 
+
 
N
O
D
E
_
H
 
/
 
2
 
+
 
5
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
1
5
,
 
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
:
 
7
0
0
,
 
f
i
l
l
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
,
 
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
:
 
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
}
>
{
v
}
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
(
i
s
S
l
o
w
 
|
|
 
i
s
F
a
s
t
)
 
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
x
 
+
 
N
O
D
E
_
W
 
/
 
2
}
 
y
=
{
y
 
-
 
6
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
1
1
,
 
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
:
 
7
0
0
,
 
f
i
l
l
:
 
c
,
 
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
:
 
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
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
S
l
o
w
 
&
&
 
i
s
F
a
s
t
 
?
 
"
s
l
o
w
=
f
a
s
t
"
 
:
 
i
s
S
l
o
w
 
?
 
"
s
l
o
w
"
 
:
 
"
f
a
s
t
"
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
/
 
L
i
n
e
a
r
 
d
o
u
b
l
y
 
l
a
y
o
u
t


 
 
c
o
n
s
t
 
w
i
d
t
h
 
=
 
M
a
t
h
.
m
a
x
(
5
0
0
,
 
6
0
 
+
 
n
 
*
 
(
N
O
D
E
_
W
 
+
 
G
A
P
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
w
i
d
t
h
}
 
h
e
i
g
h
t
=
{
1
4
0
}
 
s
t
y
l
e
=
{
{
 
d
i
s
p
l
a
y
:
 
"
b
l
o
c
k
"
,
 
m
a
r
g
i
n
:
 
"
0
 
a
u
t
o
"
,
 
m
i
n
W
i
d
t
h
:
 
w
i
d
t
h
 
}
}
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
d
"
 
v
i
e
w
B
o
x
=
"
0
 
0
 
1
0
 
1
0
"
 
r
e
f
X
=
"
9
"
 
r
e
f
Y
=
"
5
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
6
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
6
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
-
s
t
a
r
t
-
r
e
v
e
r
s
e
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
1
0
,
5
 
L
0
,
1
0
 
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
t
e
x
t
M
u
t
e
d
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
/
d
e
f
s
>


 
 
 
 
 
 
 
 
{
f
r
a
m
e
.
v
a
l
u
e
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
 
{


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
x
 
=
 
3
0
 
+
 
i
 
*
 
(
N
O
D
E
_
W
 
+
 
G
A
P
)
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
y
 
=
 
4
0
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
S
l
o
w
 
=
 
f
r
a
m
e
.
s
l
o
w
 
=
=
=
 
i
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
 
=
 
i
s
S
l
o
w
 
?
 
"
#
3
b
8
2
f
6
"
 
:
 
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
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
b
g
 
=
 
i
s
S
l
o
w
 
?
 
"
r
g
b
a
(
5
9
,
1
3
0
,
2
4
6
,
0
.
1
2
)
"
 
:
 
T
H
E
M
E
.
b
g
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
}
 
s
t
y
l
e
=
{
{
 
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
 
"
t
r
a
n
s
f
o
r
m
 
0
.
3
s
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
r
e
c
t
 
x
=
{
x
}
 
y
=
{
y
}
 
w
i
d
t
h
=
{
N
O
D
E
_
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
N
O
D
E
_
H
}
 
r
x
=
{
8
}
 
f
i
l
l
=
{
b
g
}
 
s
t
r
o
k
e
=
{
c
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
2
.
2
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
n
e
 
x
1
=
{
x
 
+
 
2
2
}
 
y
1
=
{
y
}
 
x
2
=
{
x
 
+
 
2
2
}
 
y
2
=
{
y
 
+
 
N
O
D
E
_
H
}
 
s
t
r
o
k
e
=
{
c
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
}
 
o
p
a
c
i
t
y
=
{
0
.
4
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
n
e
 
x
1
=
{
x
 
+
 
N
O
D
E
_
W
 
-
 
2
2
}
 
y
1
=
{
y
}
 
x
2
=
{
x
 
+
 
N
O
D
E
_
W
 
-
 
2
2
}
 
y
2
=
{
y
 
+
 
N
O
D
E
_
H
}
 
s
t
r
o
k
e
=
{
c
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
}
 
o
p
a
c
i
t
y
=
{
0
.
4
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
x
 
+
 
1
1
}
 
y
=
{
y
 
+
 
N
O
D
E
_
H
 
/
 
2
 
+
 
4
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
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
1
0
,
 
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
:
 
7
0
0
,
 
f
i
l
l
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
 
}
}
>
•
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
{
x
 
+
 
N
O
D
E
_
W
 
/
 
2
}
 
y
=
{
y
 
+
 
N
O
D
E
_
H
 
/
 
2
 
+
 
5
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
1
5
,
 
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
:
 
7
0
0
,
 
f
i
l
l
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
,
 
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
:
 
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
}
>
{
v
}
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
{
x
 
+
 
N
O
D
E
_
W
 
-
 
1
1
}
 
y
=
{
y
 
+
 
N
O
D
E
_
H
 
/
 
2
 
+
 
4
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
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
1
0
,
 
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
:
 
7
0
0
,
 
f
i
l
l
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
 
}
}
>
•
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
{
x
 
+
 
1
1
}
 
y
=
{
y
 
-
 
4
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
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
8
,
 
f
i
l
l
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
o
n
t
W
e
i
g
h
t
:
 
7
0
0
 
}
}
>
p
r
e
v
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
{
x
 
+
 
N
O
D
E
_
W
 
-
 
1
1
}
 
y
=
{
y
 
-
 
4
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
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
8
,
 
f
i
l
l
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
o
n
t
W
e
i
g
h
t
:
 
7
0
0
 
}
}
>
n
e
x
t
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
 
<
 
f
r
a
m
e
.
v
a
l
u
e
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
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
n
e
 
x
1
=
{
x
 
+
 
N
O
D
E
_
W
 
-
 
2
}
 
y
1
=
{
y
 
+
 
N
O
D
E
_
H
 
/
 
2
 
-
 
5
}
 
x
2
=
{
x
 
+
 
N
O
D
E
_
W
 
+
 
G
A
P
 
-
 
4
}
 
y
2
=
{
y
 
+
 
N
O
D
E
_
H
 
/
 
2
 
-
 
5
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
t
e
x
t
M
u
t
e
d
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
8
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
d
)
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
 
>
 
0
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
n
e
 
x
1
=
{
x
 
+
 
2
}
 
y
1
=
{
y
 
+
 
N
O
D
E
_
H
 
/
 
2
 
+
 
8
}
 
x
2
=
{
x
 
-
 
G
A
P
 
+
 
4
}
 
y
2
=
{
y
 
+
 
N
O
D
E
_
H
 
/
 
2
 
+
 
8
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
t
e
x
t
M
u
t
e
d
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
8
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
d
)
"
 
/
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
 
 
V
i
s
u
a
l
i
z
e
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
M
o
d
e
>
(
"
d
o
u
b
l
y
"
)
;


 
 
c
o
n
s
t
 
[
l
i
s
t
S
t
r
,
 
s
e
t
L
i
s
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
1
0
,
 
2
0
,
 
3
0
,
 
4
0
"
)
;


 
 
c
o
n
s
t
 
[
a
f
t
e
r
I
d
x
,
 
s
e
t
A
f
t
e
r
I
d
x
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
1
)
;


 
 
c
o
n
s
t
 
[
n
e
w
V
a
l
,
 
s
e
t
N
e
w
V
a
l
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
7
7
)
;


 
 
c
o
n
s
t
 
[
c
y
c
l
e
S
t
a
r
t
,
 
s
e
t
C
y
c
l
e
S
t
a
r
t
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
1
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
 
{


 
 
 
 
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
 
p
a
r
s
e
L
i
s
t
(
l
i
s
t
S
t
r
)
;


 
 
 
 
i
f
 
(
m
o
d
e
 
=
=
=
 
"
f
l
o
y
d
"
)
 
r
e
t
u
r
n
 
b
u
i
l
d
F
l
o
y
d
(
v
a
l
u
e
s
,
 
M
a
t
h
.
m
i
n
(
c
y
c
l
e
S
t
a
r
t
,
 
v
a
l
u
e
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
)
)
;


 
 
 
 
i
f
 
(
m
o
d
e
 
=
=
=
 
"
c
i
r
c
u
l
a
r
"
)
 
{


 
 
 
 
 
 
r
e
t
u
r
n
 
[
{
 
l
i
n
e
:
 
0
,
 
v
a
r
s
:
 
{
 
h
e
a
d
:
 
v
a
l
u
e
s
[
0
]
,
 
t
a
i
l
:
 
v
a
l
u
e
s
[
v
a
l
u
e
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
 
"
C
i
r
c
u
l
a
r
 
l
i
s
t
,
 
l
a
s
t
 
n
o
d
e
'
s
 
n
e
x
t
 
w
r
a
p
s
 
t
o
 
h
e
a
d
"
,
 
v
a
l
u
e
s
,
 
h
a
s
C
y
c
l
e
:
 
t
r
u
e
 
}
 
a
s
 
F
r
a
m
e
]
;


 
 
 
 
}


 
 
 
 
r
e
t
u
r
n
 
b
u
i
l
d
D
o
u
b
l
y
D
e
m
o
(
v
a
l
u
e
s
,
 
M
a
t
h
.
m
i
n
(
a
f
t
e
r
I
d
x
,
 
v
a
l
u
e
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
)
,
 
n
e
w
V
a
l
)
;


 
 
}
,
 
[
m
o
d
e
,
 
l
i
s
t
S
t
r
,
 
a
f
t
e
r
I
d
x
,
 
n
e
w
V
a
l
,
 
c
y
c
l
e
S
t
a
r
t
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
s
e
u
d
o
 
=
 
m
o
d
e
 
=
=
=
 
"
f
l
o
y
d
"
 
?
 
P
S
E
U
D
O
_
F
L
O
Y
D
 
:
 
m
o
d
e
 
=
=
=
 
"
d
o
u
b
l
y
"
 
?
 
P
S
E
U
D
O
_
D
O
U
B
L
Y
_
I
N
S
E
R
T
 
:
 
[
"
/
/
 
C
i
r
c
u
l
a
r
 
l
i
s
t
:
"
,
 
"
/
/
 
l
a
s
t
.
n
e
x
t
 
p
o
i
n
t
s
 
t
o
 
f
i
r
s
t
"
,
 
"
/
/
 
N
o
 
n
u
l
l
 
t
e
r
m
i
n
a
t
o
r
"
,
 
"
/
/
 
T
r
a
v
e
r
s
a
l
 
s
t
o
p
s
 
w
h
e
n
 
y
o
u
 
s
e
e
 
h
e
a
d
 
a
g
a
i
n
"
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
{
m
o
d
e
 
=
=
=
 
"
f
l
o
y
d
"
 
?
 
"
F
l
o
y
d
'
s
 
C
y
c
l
e
 
D
e
t
e
c
t
i
o
n
"
 
:
 
m
o
d
e
 
=
=
=
 
"
c
i
r
c
u
l
a
r
"
 
?
 
"
C
i
r
c
u
l
a
r
 
L
i
n
k
e
d
 
L
i
s
t
"
 
:
 
"
D
o
u
b
l
y
 
L
i
n
k
e
d
 
L
i
s
t
,
 
I
n
s
e
r
t
 
A
f
t
e
r
"
}


 
 
 
 
 
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
(
[
"
d
o
u
b
l
y
"
,
 
"
c
i
r
c
u
l
a
r
"
,
 
"
f
l
o
y
d
"
]
 
a
s
 
M
o
d
e
[
]
)
.
m
a
p
(
(
m
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
k
e
y
=
{
m
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
m
)
}
 
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
 
m
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
m
 
=
=
=
 
"
f
l
o
y
d
"
 
?
 
"
F
l
o
y
d
'
s
 
C
y
c
l
e
"
 
:
 
m
 
=
=
=
 
"
d
o
u
b
l
y
"
 
?
 
"
D
o
u
b
l
y
"
 
:
 
"
C
i
r
c
u
l
a
r
"
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
L
i
s
t
 
v
a
l
u
e
s
"


 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
l
i
s
t
S
t
r
}


 
 
 
 
 
 
 
 
 
 
 
 
h
e
l
p
e
r
=
"
C
o
m
m
a
 
o
r
 
s
p
a
c
e
 
s
e
p
a
r
a
t
e
d
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
S
m
a
l
l
"
,
 
v
a
l
u
e
:
 
"
1
,
 
2
,
 
3
,
 
4
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
L
o
n
g
"
,
 
v
a
l
u
e
:
 
"
5
,
 
1
0
,
 
1
5
,
 
2
0
,
 
2
5
,
 
3
0
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
s
e
t
L
i
s
t
S
t
r
}


 
 
 
 
 
 
 
 
 
 
 
 
o
n
R
a
n
d
o
m
=
{
(
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
n
 
=
 
4
 
+
 
M
a
t
h
.
f
l
o
o
r
(
M
a
t
h
.
r
a
n
d
o
m
(
)
 
*
 
4
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
L
i
s
t
S
t
r
(
A
r
r
a
y
.
f
r
o
m
(
{
 
l
e
n
g
t
h
:
 
n
 
}
,
 
(
)
 
=
>
 
M
a
t
h
.
f
l
o
o
r
(
M
a
t
h
.
r
a
n
d
o
m
(
)
 
*
 
9
0
)
 
+
 
1
0
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
)
;


 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
/
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
d
o
u
b
l
y
"
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
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
5
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
I
n
s
e
r
t
 
a
f
t
e
r
 
i
n
d
e
x
:


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t
 
t
y
p
e
=
"
n
u
m
b
e
r
"
 
v
a
l
u
e
=
{
a
f
t
e
r
I
d
x
}
 
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
 
s
e
t
A
f
t
e
r
I
d
x
(
N
u
m
b
e
r
(
e
.
t
a
r
g
e
t
.
v
a
l
u
e
)
 
|
|
 
0
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
i
n
=
{
0
}
 
m
a
x
=
{
p
a
r
s
e
L
i
s
t
(
l
i
s
t
S
t
r
)
.
l
e
n
g
t
h
 
-
 
1
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
1
6
 
p
x
-
2
 
p
y
-
1
 
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
e
x
t
-
s
m
 
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
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
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
5
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
N
e
w
 
v
a
l
u
e
:


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t
 
t
y
p
e
=
"
n
u
m
b
e
r
"
 
v
a
l
u
e
=
{
n
e
w
V
a
l
}
 
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
 
s
e
t
N
e
w
V
a
l
(
N
u
m
b
e
r
(
e
.
t
a
r
g
e
t
.
v
a
l
u
e
)
 
|
|
 
0
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
w
-
2
0
 
p
x
-
2
 
p
y
-
1
 
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
e
x
t
-
s
m
 
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
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
l
a
b
e
l
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
m
o
d
e
 
=
=
=
 
"
f
l
o
y
d
"
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
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
5
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
C
y
c
l
e
 
s
t
a
r
t
s
 
a
t
 
i
n
d
e
x
 
(
-
1
 
=
 
n
o
 
c
y
c
l
e
)
:


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t
 
t
y
p
e
=
"
n
u
m
b
e
r
"
 
v
a
l
u
e
=
{
c
y
c
l
e
S
t
a
r
t
}
 
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
 
s
e
t
C
y
c
l
e
S
t
a
r
t
(
N
u
m
b
e
r
(
e
.
t
a
r
g
e
t
.
v
a
l
u
e
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
i
n
=
{
-
1
}
 
m
a
x
=
{
p
a
r
s
e
L
i
s
t
(
l
i
s
t
S
t
r
)
.
l
e
n
g
t
h
 
-
 
1
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
1
6
 
p
x
-
2
 
p
y
-
1
 
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
e
x
t
-
s
m
 
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
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
<
/
d
i
v
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
p
s
e
u
d
o
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
h
i
g
h
l
i
g
h
t
K
e
y
 
?
 
[
f
r
a
m
e
.
h
i
g
h
l
i
g
h
t
K
e
y
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
4
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
L
i
s
t
V
i
z
 
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
 
m
o
d
e
=
{
m
o
d
e
}
 
/
>
}


 
 
 
 
 
 
 
 
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
 
t
o
 
s
t
e
p
 
t
h
r
o
u
g
h
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
 
c
a
r
d
s
 
=
 
[


 
 
 
 
{
 
t
:
 
"
D
o
u
b
l
y
 
l
i
n
k
e
d
 
l
i
s
t
"
,
 
b
:
 
"
E
a
c
h
 
n
o
d
e
 
s
t
o
r
e
s
 
p
r
e
v
 
a
n
d
 
n
e
x
t
 
p
o
i
n
t
e
r
s
.
 
Y
o
u
 
c
a
n
 
w
a
l
k
 
e
i
t
h
e
r
 
d
i
r
e
c
t
i
o
n
.
 
D
e
l
e
t
e
-
b
y
-
n
o
d
e
 
i
s
 
O
(
1
)
 
(
n
o
 
n
e
e
d
 
t
o
 
f
i
n
d
 
p
r
e
d
e
c
e
s
s
o
r
)
.
 
E
x
t
r
a
 
m
e
m
o
r
y
 
p
e
r
 
n
o
d
e
.
"
 
}
,


 
 
 
 
{
 
t
:
 
"
C
i
r
c
u
l
a
r
 
l
i
n
k
e
d
 
l
i
s
t
"
,
 
b
:
 
"
T
h
e
 
l
a
s
t
 
n
o
d
e
'
s
 
n
e
x
t
 
p
o
i
n
t
e
r
 
w
r
a
p
s
 
b
a
c
k
 
t
o
 
t
h
e
 
h
e
a
d
.
 
N
o
 
n
u
l
l
 
t
e
r
m
i
n
a
t
o
r
.
 
U
s
e
f
u
l
 
f
o
r
 
r
o
u
n
d
-
r
o
b
i
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
 
a
n
d
 
c
i
r
c
u
l
a
r
 
b
u
f
f
e
r
s
.
"
 
}
,


 
 
 
 
{
 
t
:
 
"
D
o
u
b
l
y
 
+
 
c
i
r
c
u
l
a
r
"
,
 
b
:
 
"
C
o
m
b
i
n
e
 
b
o
t
h
:
 
b
i
d
i
r
e
c
t
i
o
n
a
l
 
t
r
a
v
e
r
s
a
l
 
w
i
t
h
 
w
r
a
p
a
r
o
u
n
d
.
 
L
i
n
u
x
'
s
 
t
a
s
k
-
s
c
h
e
d
u
l
e
r
 
r
u
n
q
u
e
u
e
 
u
s
e
s
 
t
h
i
s
 
p
a
t
t
e
r
n
.
"
 
}
,


 
 
 
 
{
 
t
:
 
"
F
l
o
y
d
'
s
 
c
y
c
l
e
 
d
e
t
e
c
t
i
o
n
"
,
 
b
:
 
"
T
w
o
 
p
o
i
n
t
e
r
s
,
 
s
l
o
w
 
(
o
n
e
 
s
t
e
p
)
 
a
n
d
 
f
a
s
t
 
(
t
w
o
 
s
t
e
p
s
)
.
 
I
f
 
t
h
e
r
e
'
s
 
a
 
c
y
c
l
e
,
 
f
a
s
t
 
l
a
p
s
 
s
l
o
w
,
 
t
h
e
y
 
M
U
S
T
 
m
e
e
t
.
 
I
f
 
f
a
s
t
 
r
e
a
c
h
e
s
 
n
u
l
l
,
 
n
o
 
c
y
c
l
e
.
 
O
(
n
)
 
t
i
m
e
,
 
O
(
1
)
 
s
p
a
c
e
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
w
h
y
 
a
d
d
 
a
 
s
e
c
o
n
d
 
p
o
i
n
t
e
r
?
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
B
i
d
i
r
e
c
t
i
o
n
a
l
 
w
a
l
k
s
 
u
n
l
o
c
k
 
O
(
1
)
 
d
e
l
e
t
e
s
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


 
 
 
 
 
 
 
 
 
 
A
 
s
i
n
g
l
y
 
l
i
s
t
 
c
a
n
 
o
n
l
y
 
t
e
l
l
 
y
o
u
 
w
h
e
r
e
 
t
o
 
g
o
 
n
e
x
t
.
 
A
 
d
o
u
b
l
y
 
l
i
s
t
 
c
a
n
 
a
l
s
o
 
t
e
l
l
 
y
o
u
 
w
h
e
r
e
 
y
o
u


 
 
 
 
 
 
 
 
 
 
c
a
m
e
 
f
r
o
m
.
 
T
h
a
t
 
t
i
n
y
 
a
d
d
i
t
i
o
n
 
t
u
r
n
s
 
"
d
e
l
e
t
e
 
t
h
i
s
 
n
o
d
e
"
 
f
r
o
m
 
O
(
n
)
 
i
n
t
o
 
O
(
1
)
,
 
a
 
h
u
g
e
 
w
i
n


 
 
 
 
 
 
 
 
 
 
f
o
r
 
L
R
U
 
c
a
c
h
e
s
 
a
n
d
 
e
d
i
t
o
r
 
u
n
d
o
 
s
t
a
c
k
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
c
a
r
d
s
.
m
a
p
(
(
c
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
c
.
t
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
c
.
b
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


 
 
c
o
n
s
t
 
p
r
o
b
s
 
=
 
[


 
 
 
 
{
 
q
:
 
"
I
n
 
a
 
d
o
u
b
l
y
 
l
i
n
k
e
d
 
l
i
s
t
 
w
i
t
h
 
n
o
d
e
s
 
A
↔
B
↔
C
,
 
a
f
t
e
r
 
d
e
l
e
t
e
N
o
d
e
(
B
)
,
 
t
h
e
 
r
e
s
u
l
t
i
n
g
 
s
t
r
u
c
t
u
r
e
?
"
,
 
a
:
 
"
A
 
↔
 
C
"
 
}
,


 
 
 
 
{
 
q
:
 
"
F
l
o
y
d
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
 
o
n
 
l
i
s
t
 
1
→
2
→
3
→
4
→
2
 
(
4
 
l
o
o
p
s
 
t
o
 
2
)
.
 
H
o
w
 
m
a
n
y
 
s
t
e
p
s
 
u
n
t
i
l
 
s
l
o
w
 
m
e
e
t
s
 
f
a
s
t
?
"
,
 
a
:
 
"
3
 
i
t
e
r
a
t
i
o
n
s
 
(
s
l
o
w
 
a
t
 
4
,
 
f
a
s
t
 
a
t
 
4
)
"
 
}
,


 
 
 
 
{
 
q
:
 
"
S
p
a
c
e
 
c
o
m
p
l
e
x
i
t
y
 
o
f
 
F
l
o
y
d
'
s
 
v
s
 
u
s
i
n
g
 
a
 
H
a
s
h
S
e
t
?
"
,
 
a
:
 
"
F
l
o
y
d
 
=
 
O
(
1
)
,
 
H
a
s
h
S
e
t
 
=
 
O
(
n
)
"
 
}
,


 
 
]
;


 
 
c
o
n
s
t
 
[
g
u
e
s
s
,
 
s
e
t
G
u
e
s
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
(
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
)
[
]
>
(
p
r
o
b
s
.
m
a
p
(
(
)
 
=
>
 
n
u
l
l
)
)
;


 
 
c
o
n
s
t
 
[
s
h
o
w
,
 
s
e
t
S
h
o
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
b
o
o
l
e
a
n
[
]
>
(
p
r
o
b
s
.
m
a
p
(
(
)
 
=
>
 
f
a
l
s
e
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
W
o
r
k
 
e
a
c
h
 
p
r
o
b
l
e
m
 
o
n
 
p
a
p
e
r
,
 
t
h
e
n
 
r
e
v
e
a
l
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
p
r
o
b
s
.
m
a
p
(
(
p
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
 
m
b
-
3
"
>
#
{
i
 
+
 
1
}
 
{
p
.
q
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
2
 
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
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
g
u
e
s
s
[
i
]
 
?
?
 
"
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
v
 
=
 
[
.
.
.
g
u
e
s
s
]
;
 
v
[
i
]
 
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
v
a
l
u
e
;
 
s
e
t
G
u
e
s
s
(
v
)
;
 
}
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
y
o
u
r
 
a
n
s
w
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
e
x
t
-
s
m
 
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
i
n
-
w
-
4
8
"


 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
b
u
t
t
o
n
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
 
{
 
c
o
n
s
t
 
v
 
=
 
[
.
.
.
s
h
o
w
]
;
 
v
[
i
]
 
=
 
t
r
u
e
;
 
s
e
t
S
h
o
w
(
v
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
e
d
i
u
m
 
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
s
t
o
n
e
-
9
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
s
t
o
n
e
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
w
h
i
t
e
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
R
e
v
e
a
l


 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
{
s
h
o
w
[
i
]
 
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
b
o
l
d
 
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
g
-
l
i
m
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
l
i
m
e
-
4
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
l
i
m
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
l
i
m
e
-
2
0
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
A
n
s
w
e
r
:
 
{
p
.
a
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
y
 
F
l
o
y
d
 
w
o
r
k
s
 
(
t
h
e
 
p
r
o
o
f
)
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


 
 
 
 
 
 
 
 
 
 
O
n
c
e
 
b
o
t
h
 
p
o
i
n
t
e
r
s
 
e
n
t
e
r
 
t
h
e
 
c
y
c
l
e
,
 
e
a
c
h
 
i
t
e
r
a
t
i
o
n
 
f
a
s
t
 
g
a
i
n
s
 
1
 
s
t
e
p
 
o
f
 
d
i
s
t
a
n
c
e
 
o
n
 
s
l
o
w


 
 
 
 
 
 
 
 
 
 
(
f
a
s
t
 
m
o
v
e
s
 
2
,
 
s
l
o
w
 
m
o
v
e
s
 
1
)
.
 
T
h
a
t
 
d
i
s
t
a
n
c
e
 
c
y
c
l
e
s
 
m
o
d
u
l
o
 
t
h
e
 
c
y
c
l
e
 
l
e
n
g
t
h
 
L
,
 
e
v
e
n
t
u
a
l
l
y


 
 
 
 
 
 
 
 
 
 
i
t
 
h
i
t
s
 
0
,
 
m
e
a
n
i
n
g
 
t
h
e
y
 
c
o
l
l
i
d
e
.
 
B
e
c
a
u
s
e
 
f
a
s
t
 
c
a
n
 
n
e
v
e
r
 
"
s
k
i
p
 
o
v
e
r
"
 
s
l
o
w
 
b
y
 
e
x
a
c
t
l
y
 
L
 
w
h
i
l
e


 
 
 
 
 
 
 
 
 
 
e
n
t
e
r
i
n
g
 
t
h
e
 
c
y
c
l
e
,
 
t
h
e
 
c
o
l
l
i
s
i
o
n
 
i
s
 
g
u
a
r
a
n
t
e
e
d
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
R
e
a
l
-
w
o
r
l
d
 
u
s
e
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
 
s
p
a
c
e
-
y
-
1
 
p
l
-
4
 
l
i
s
t
-
d
i
s
c
"
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
L
R
U
 
c
a
c
h
e
:
 
d
o
u
b
l
y
-
l
i
n
k
e
d
 
l
i
s
t
 
+
 
h
a
s
h
 
m
a
p
 
(
O
(
1
)
 
m
o
v
e
-
t
o
-
f
r
o
n
t
)
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
r
o
w
s
e
r
 
t
a
b
 
c
a
r
o
u
s
e
l
:
 
c
i
r
c
u
l
a
r
 
d
o
u
b
l
y
 
l
i
s
t
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
M
u
s
i
c
 
p
l
a
y
l
i
s
t
 
o
n
 
r
e
p
e
a
t
:
 
c
i
r
c
u
l
a
r
 
l
i
s
t
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
e
t
e
c
t
i
n
g
 
i
n
f
i
n
i
t
e
 
l
o
o
p
s
 
i
n
 
s
t
a
t
e
 
m
a
c
h
i
n
e
s
:
 
F
l
o
y
d
'
s
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
 
 
R
o
o
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
2
_
D
o
u
b
l
y
C
i
r
c
u
l
a
r
L
i
s
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
 
}
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
W
h
i
c
h
 
o
p
e
r
a
t
i
o
n
 
b
e
c
o
m
e
s
 
O
(
1
)
 
i
n
 
a
 
d
o
u
b
l
y
 
l
i
n
k
e
d
 
l
i
s
t
 
b
u
t
 
i
s
 
O
(
n
)
 
i
n
 
a
 
s
i
n
g
l
y
 
l
i
n
k
e
d
 
l
i
s
t
 
(
g
i
v
e
n
 
a
 
p
o
i
n
t
e
r
 
t
o
 
t
h
e
 
n
o
d
e
)
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
I
n
s
e
r
t
 
a
t
 
h
e
a
d
"
,
 
"
D
e
l
e
t
e
 
a
 
g
i
v
e
n
 
n
o
d
e
"
,
 
"
S
e
a
r
c
h
 
f
o
r
 
a
 
v
a
l
u
e
"
,
 
"
C
o
m
p
u
t
e
 
l
e
n
g
t
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
W
i
t
h
 
p
r
e
v
 
p
o
i
n
t
e
r
 
a
v
a
i
l
a
b
l
e
,
 
y
o
u
 
c
a
n
 
r
e
w
i
r
e
 
n
e
i
g
h
b
o
u
r
s
 
w
i
t
h
o
u
t
 
s
c
a
n
n
i
n
g
.
 
S
i
n
g
l
y
-
l
i
n
k
e
d
 
n
e
e
d
s
 
a
n
 
O
(
n
)
 
w
a
l
k
 
t
o
 
f
i
n
d
 
t
h
e
 
p
r
e
d
e
c
e
s
s
o
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
 
F
l
o
y
d
'
s
 
c
y
c
l
e
 
d
e
t
e
c
t
i
o
n
,
 
i
f
 
f
a
s
t
 
m
o
v
e
s
 
2
 
s
t
e
p
s
 
a
n
d
 
s
l
o
w
 
m
o
v
e
s
 
1
 
s
t
e
p
 
p
e
r
 
i
t
e
r
a
t
i
o
n
,
 
a
n
d
 
a
 
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
 
w
h
y
 
a
r
e
 
t
h
e
y
 
g
u
a
r
a
n
t
e
e
d
 
t
o
 
m
e
e
t
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
F
a
s
t
 
c
a
t
c
h
e
s
 
s
l
o
w
 
b
y
 
e
x
a
c
t
l
y
 
L
 
s
t
e
p
s
 
o
n
c
e
 
b
o
t
h
 
a
r
e
 
i
n
s
i
d
e
 
t
h
e
 
c
y
c
l
e
"
,


 
 
 
 
 
 
 
 
"
F
a
s
t
 
c
l
o
s
e
s
 
t
h
e
 
g
a
p
 
b
y
 
1
 
e
a
c
h
 
s
t
e
p
 
o
n
c
e
 
b
o
t
h
 
a
r
e
 
i
n
 
t
h
e
 
c
y
c
l
e
"
,


 
 
 
 
 
 
 
 
"
T
h
e
y
 
a
l
w
a
y
s
 
s
t
a
r
t
 
a
t
 
t
h
e
 
s
a
m
e
 
n
o
d
e
"
,


 
 
 
 
 
 
 
 
"
S
l
o
w
 
s
p
e
e
d
s
 
u
p
 
i
n
s
i
d
e
 
c
y
c
l
e
s
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
R
e
l
a
t
i
v
e
 
s
p
e
e
d
 
i
s
 
(
2
−
1
)
 
=
 
1
.
 
T
h
e
 
g
a
p
 
s
h
r
i
n
k
s
 
b
y
 
1
 
p
e
r
 
i
t
e
r
a
t
i
o
n
 
a
n
d
 
w
r
a
p
s
 
m
o
d
u
l
o
 
L
,
 
h
i
t
t
i
n
g
 
0
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
A
 
c
i
r
c
u
l
a
r
 
s
i
n
g
l
y
 
l
i
n
k
e
d
 
l
i
s
t
 
h
a
s
 
n
o
 
_
_
_
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
H
e
a
d
 
p
o
i
n
t
e
r
"
,
 
"
C
y
c
l
e
s
"
,
 
"
N
u
l
l
 
t
e
r
m
i
n
a
t
o
r
"
,
 
"
V
a
l
u
e
s
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
h
e
 
l
a
s
t
 
n
o
d
e
'
s
 
n
e
x
t
 
l
o
o
p
s
 
b
a
c
k
 
t
o
 
h
e
a
d
.
 
T
h
e
r
e
 
i
s
 
n
o
 
n
u
l
l
,
 
y
o
u
 
m
u
s
t
 
s
t
o
p
 
b
a
s
e
d
 
o
n
 
s
o
m
e
 
o
t
h
e
r
 
c
o
n
d
i
t
i
o
n
 
(
e
.
g
.
,
 
r
e
t
u
r
n
i
n
g
 
t
o
 
h
e
a
d
)
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
S
p
a
c
e
 
c
o
m
p
l
e
x
i
t
y
 
o
f
 
F
l
o
y
d
'
s
 
c
y
c
l
e
 
d
e
t
e
c
t
i
o
n
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
O
(
1
)
"
,
 
"
O
(
l
o
g
 
n
)
"
,
 
"
O
(
n
)
"
,
 
"
O
(
n
²
)
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
 
0
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
O
n
l
y
 
t
w
o
 
p
o
i
n
t
e
r
s
,
 
c
o
n
s
t
a
n
t
 
e
x
t
r
a
 
s
p
a
c
e
.
 
T
h
a
t
'
s
 
w
h
y
 
i
t
 
b
e
a
t
s
 
t
h
e
 
H
a
s
h
S
e
t
 
a
p
p
r
o
a
c
h
 
(
O
(
n
)
 
m
e
m
o
r
y
)
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
D
o
u
b
l
y
 
&
 
C
i
r
c
u
l
a
r
 
L
i
n
k
e
d
 
L
i
s
t
s
"


 
 
 
 
 
 
l
e
v
e
l
=
{
2
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
L
R
U
 
c
a
c
h
e
 
d
e
s
i
g
n
,
 
c
y
c
l
e
 
d
e
t
e
c
t
i
o
n
 
a
r
e
 
f
r
e
q
u
e
n
t
 
i
n
t
e
r
v
i
e
w
 
p
r
o
b
l
e
m
s
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
e
q
u
e
s
 
&
 
S
p
e
c
i
a
l
 
Q
u
e
u
e
s
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


