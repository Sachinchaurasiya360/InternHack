
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


 
 
I
n
l
i
n
e
C
o
d
e
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
h
a
s
h
i
n
g
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
 
S
t
r
a
t
e
g
y
 
=
 
"
c
h
a
i
n
i
n
g
"
 
|
 
"
p
r
o
b
i
n
g
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


 
 
c
h
a
i
n
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
[
]
;


 
 
s
l
o
t
s
:
 
(
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
)
[
]
;


 
 
c
u
r
s
o
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


 
 
p
r
o
b
e
T
r
a
i
l
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


 
 
j
u
s
t
I
n
s
e
r
t
e
d
?
:
 
n
u
m
b
e
r
;


 
 
l
o
a
d
F
a
c
t
o
r
:
 
n
u
m
b
e
r
;


 
 
c
u
r
r
e
n
t
K
e
y
?
:
 
n
u
m
b
e
r
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
C
H
A
I
N
 
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
(
k
e
y
)
:
"
,


 
 
"
 
 
h
 
←
 
k
e
y
 
m
o
d
 
t
a
b
l
e
S
i
z
e
"
,


 
 
"
 
 
b
u
c
k
e
t
 
←
 
t
a
b
l
e
[
h
]
"
,


 
 
"
 
 
i
f
 
k
e
y
 
n
o
t
 
i
n
 
b
u
c
k
e
t
:
"
,


 
 
"
 
 
 
 
b
u
c
k
e
t
.
a
p
p
e
n
d
(
k
e
y
)
"
,


 
 
"
 
 
l
o
a
d
F
a
c
t
o
r
 
←
 
n
 
/
 
t
a
b
l
e
S
i
z
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
P
R
O
B
E
 
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
(
k
e
y
)
:
"
,


 
 
"
 
 
h
 
←
 
k
e
y
 
m
o
d
 
t
a
b
l
e
S
i
z
e
"
,


 
 
"
 
 
i
 
←
 
0
"
,


 
 
"
 
 
w
h
i
l
e
 
t
a
b
l
e
[
(
h
 
+
 
i
)
 
m
o
d
 
t
a
b
l
e
S
i
z
e
]
 
i
s
 
o
c
c
u
p
i
e
d
:
"
,


 
 
"
 
 
 
 
i
f
 
t
a
b
l
e
[
.
.
.
]
 
=
=
 
k
e
y
:
 
r
e
t
u
r
n
 
 
/
/
 
a
l
r
e
a
d
y
 
i
n
"
,


 
 
"
 
 
 
 
i
 
←
 
i
 
+
 
1
"
,


 
 
"
 
 
t
a
b
l
e
[
(
h
 
+
 
i
)
 
m
o
d
 
t
a
b
l
e
S
i
z
e
]
 
←
 
k
e
y
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
C
h
a
i
n
i
n
g
(
k
e
y
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
 
s
i
z
e
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
 
c
h
a
i
n
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
[
]
 
=
 
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
 
s
i
z
e
 
}
,
 
(
)
 
=
>
 
[
]
)
;


 
 
l
e
t
 
n
 
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
 
0
,
 
v
a
r
s
:
 
{
 
t
a
b
l
e
S
i
z
e
:
 
s
i
z
e
 
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
E
m
p
t
y
 
t
a
b
l
e
 
o
f
 
s
i
z
e
 
$
{
s
i
z
e
}
 
(
c
h
a
i
n
i
n
g
)
`
,
 
c
h
a
i
n
s
:
 
c
h
a
i
n
s
.
m
a
p
(
(
c
)
 
=
>
 
[
.
.
.
c
]
)
,
 
s
l
o
t
s
:
 
[
]
,
 
p
r
o
b
e
T
r
a
i
l
:
 
[
]
,
 
l
o
a
d
F
a
c
t
o
r
:
 
0
 
}
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
 
k
 
o
f
 
k
e
y
s
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
 
k
e
y
:
 
k
 
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
 
k
e
y
 
$
{
k
}
`
,
 
c
h
a
i
n
s
:
 
c
h
a
i
n
s
.
m
a
p
(
(
c
)
 
=
>
 
[
.
.
.
c
]
)
,
 
s
l
o
t
s
:
 
[
]
,
 
p
r
o
b
e
T
r
a
i
l
:
 
[
]
,
 
l
o
a
d
F
a
c
t
o
r
:
 
n
 
/
 
s
i
z
e
,
 
c
u
r
r
e
n
t
K
e
y
:
 
k
 
}
)
;


 
 
 
 
c
o
n
s
t
 
h
 
=
 
(
(
k
 
%
 
s
i
z
e
)
 
+
 
s
i
z
e
)
 
%
 
s
i
z
e
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
 
k
e
y
:
 
k
,
 
h
,
 
f
o
r
m
u
l
a
:
 
`
$
{
k
}
 
m
o
d
 
$
{
s
i
z
e
}
 
=
 
$
{
h
}
`
 
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
h
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
H
a
s
h
:
 
$
{
k
}
 
m
o
d
 
$
{
s
i
z
e
}
 
=
 
$
{
h
}
`
,
 
c
h
a
i
n
s
:
 
c
h
a
i
n
s
.
m
a
p
(
(
c
)
 
=
>
 
[
.
.
.
c
]
)
,
 
s
l
o
t
s
:
 
[
]
,
 
p
r
o
b
e
T
r
a
i
l
:
 
[
]
,
 
c
u
r
s
o
r
:
 
h
,
 
l
o
a
d
F
a
c
t
o
r
:
 
n
 
/
 
s
i
z
e
,
 
c
u
r
r
e
n
t
K
e
y
:
 
k
 
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
 
b
u
c
k
e
t
:
 
h
,
 
"
b
u
c
k
e
t
.
s
i
z
e
"
:
 
c
h
a
i
n
s
[
h
]
.
l
e
n
g
t
h
 
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
L
o
o
k
 
a
t
 
b
u
c
k
e
t
 
$
{
h
}
 
(
h
a
s
 
$
{
c
h
a
i
n
s
[
h
]
.
l
e
n
g
t
h
}
 
n
o
d
e
$
{
c
h
a
i
n
s
[
h
]
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
 
1
 
?
 
"
"
 
:
 
"
s
"
}
)
`
,
 
c
h
a
i
n
s
:
 
c
h
a
i
n
s
.
m
a
p
(
(
c
)
 
=
>
 
[
.
.
.
c
]
)
,
 
s
l
o
t
s
:
 
[
]
,
 
p
r
o
b
e
T
r
a
i
l
:
 
[
]
,
 
c
u
r
s
o
r
:
 
h
,
 
l
o
a
d
F
a
c
t
o
r
:
 
n
 
/
 
s
i
z
e
,
 
c
u
r
r
e
n
t
K
e
y
:
 
k
 
}
)
;


 
 
 
 
c
o
n
s
t
 
d
u
p
 
=
 
c
h
a
i
n
s
[
h
]
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
 
d
u
p
l
i
c
a
t
e
:
 
S
t
r
i
n
g
(
d
u
p
)
 
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
 
d
u
p
 
?
 
`
$
{
k
}
 
a
l
r
e
a
d
y
 
i
n
 
b
u
c
k
e
t
,
 
s
k
i
p
`
 
:
 
`
$
{
k
}
 
n
o
t
 
p
r
e
s
e
n
t
,
 
a
p
p
e
n
d
`
,
 
c
h
a
i
n
s
:
 
c
h
a
i
n
s
.
m
a
p
(
(
c
)
 
=
>
 
[
.
.
.
c
]
)
,
 
s
l
o
t
s
:
 
[
]
,
 
p
r
o
b
e
T
r
a
i
l
:
 
[
]
,
 
c
u
r
s
o
r
:
 
h
,
 
l
o
a
d
F
a
c
t
o
r
:
 
n
 
/
 
s
i
z
e
,
 
c
u
r
r
e
n
t
K
e
y
:
 
k
 
}
)
;


 
 
 
 
i
f
 
(
!
d
u
p
)
 
{


 
 
 
 
 
 
c
h
a
i
n
s
[
h
]
.
p
u
s
h
(
k
)
;


 
 
 
 
 
 
n
+
+
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
 
"
b
u
c
k
e
t
.
s
i
z
e
"
:
 
c
h
a
i
n
s
[
h
]
.
l
e
n
g
t
h
 
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
b
u
c
k
e
t
.
s
i
z
e
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
p
p
e
n
d
e
d
 
$
{
k
}
 
t
o
 
b
u
c
k
e
t
 
$
{
h
}
`
,
 
c
h
a
i
n
s
:
 
c
h
a
i
n
s
.
m
a
p
(
(
c
)
 
=
>
 
[
.
.
.
c
]
)
,
 
s
l
o
t
s
:
 
[
]
,
 
p
r
o
b
e
T
r
a
i
l
:
 
[
]
,
 
c
u
r
s
o
r
:
 
h
,
 
j
u
s
t
I
n
s
e
r
t
e
d
:
 
h
,
 
l
o
a
d
F
a
c
t
o
r
:
 
n
 
/
 
s
i
z
e
,
 
c
u
r
r
e
n
t
K
e
y
:
 
k
 
}
)
;


 
 
 
 
}


 
 
 
 
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
 
n
,
 
l
o
a
d
F
a
c
t
o
r
:
 
(
n
 
/
 
s
i
z
e
)
.
t
o
F
i
x
e
d
(
2
)
 
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
l
o
a
d
F
a
c
t
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
 
`
L
o
a
d
 
f
a
c
t
o
r
 
α
 
=
 
$
{
n
}
/
$
{
s
i
z
e
}
 
=
 
$
{
(
n
 
/
 
s
i
z
e
)
.
t
o
F
i
x
e
d
(
2
)
}
`
,
 
c
h
a
i
n
s
:
 
c
h
a
i
n
s
.
m
a
p
(
(
c
)
 
=
>
 
[
.
.
.
c
]
)
,
 
s
l
o
t
s
:
 
[
]
,
 
p
r
o
b
e
T
r
a
i
l
:
 
[
]
,
 
l
o
a
d
F
a
c
t
o
r
:
 
n
 
/
 
s
i
z
e
 
}
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
P
r
o
b
i
n
g
(
k
e
y
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
 
s
i
z
e
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
 
s
l
o
t
s
:
 
(
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
)
[
]
 
=
 
A
r
r
a
y
(
s
i
z
e
)
.
f
i
l
l
(
n
u
l
l
)
;


 
 
l
e
t
 
n
 
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
 
0
,
 
v
a
r
s
:
 
{
 
t
a
b
l
e
S
i
z
e
:
 
s
i
z
e
 
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
E
m
p
t
y
 
t
a
b
l
e
 
o
f
 
s
i
z
e
 
$
{
s
i
z
e
}
 
(
l
i
n
e
a
r
 
p
r
o
b
i
n
g
)
`
,
 
c
h
a
i
n
s
:
 
[
]
,
 
s
l
o
t
s
:
 
[
.
.
.
s
l
o
t
s
]
,
 
p
r
o
b
e
T
r
a
i
l
:
 
[
]
,
 
l
o
a
d
F
a
c
t
o
r
:
 
0
 
}
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
 
k
 
o
f
 
k
e
y
s
)
 
{


 
 
 
 
i
f
 
(
n
 
>
=
 
s
i
z
e
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
 
k
e
y
:
 
k
,
 
e
r
r
:
 
"
f
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
T
a
b
l
e
 
f
u
l
l
,
 
c
a
n
n
o
t
 
i
n
s
e
r
t
 
$
{
k
}
`
,
 
c
h
a
i
n
s
:
 
[
]
,
 
s
l
o
t
s
:
 
[
.
.
.
s
l
o
t
s
]
,
 
p
r
o
b
e
T
r
a
i
l
:
 
[
]
,
 
l
o
a
d
F
a
c
t
o
r
:
 
1
,
 
c
u
r
r
e
n
t
K
e
y
:
 
k
 
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
 
k
e
y
:
 
k
 
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
 
k
e
y
 
$
{
k
}
`
,
 
c
h
a
i
n
s
:
 
[
]
,
 
s
l
o
t
s
:
 
[
.
.
.
s
l
o
t
s
]
,
 
p
r
o
b
e
T
r
a
i
l
:
 
[
]
,
 
l
o
a
d
F
a
c
t
o
r
:
 
n
 
/
 
s
i
z
e
,
 
c
u
r
r
e
n
t
K
e
y
:
 
k
 
}
)
;


 
 
 
 
c
o
n
s
t
 
h
 
=
 
(
(
k
 
%
 
s
i
z
e
)
 
+
 
s
i
z
e
)
 
%
 
s
i
z
e
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
 
k
e
y
:
 
k
,
 
h
,
 
f
o
r
m
u
l
a
:
 
`
$
{
k
}
 
m
o
d
 
$
{
s
i
z
e
}
 
=
 
$
{
h
}
`
 
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
h
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
H
a
s
h
:
 
$
{
k
}
 
m
o
d
 
$
{
s
i
z
e
}
 
=
 
$
{
h
}
`
,
 
c
h
a
i
n
s
:
 
[
]
,
 
s
l
o
t
s
:
 
[
.
.
.
s
l
o
t
s
]
,
 
p
r
o
b
e
T
r
a
i
l
:
 
[
]
,
 
c
u
r
s
o
r
:
 
h
,
 
l
o
a
d
F
a
c
t
o
r
:
 
n
 
/
 
s
i
z
e
,
 
c
u
r
r
e
n
t
K
e
y
:
 
k
 
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
 
i
:
 
0
 
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
S
t
a
r
t
 
p
r
o
b
i
n
g
 
w
i
t
h
 
i
 
=
 
0
"
,
 
c
h
a
i
n
s
:
 
[
]
,
 
s
l
o
t
s
:
 
[
.
.
.
s
l
o
t
s
]
,
 
p
r
o
b
e
T
r
a
i
l
:
 
[
]
,
 
c
u
r
s
o
r
:
 
h
,
 
l
o
a
d
F
a
c
t
o
r
:
 
n
 
/
 
s
i
z
e
,
 
c
u
r
r
e
n
t
K
e
y
:
 
k
 
}
)
;


 
 
 
 
l
e
t
 
i
 
=
 
0
;


 
 
 
 
c
o
n
s
t
 
t
r
a
i
l
:
 
n
u
m
b
e
r
[
]
 
=
 
[
]
;


 
 
 
 
w
h
i
l
e
 
(
i
 
<
 
s
i
z
e
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
p
o
s
 
=
 
(
h
 
+
 
i
)
 
%
 
s
i
z
e
;


 
 
 
 
 
 
t
r
a
i
l
.
p
u
s
h
(
p
o
s
)
;


 
 
 
 
 
 
i
f
 
(
s
l
o
t
s
[
p
o
s
]
 
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
 
3
,
 
v
a
r
s
:
 
{
 
i
,
 
p
o
s
,
 
"
s
l
o
t
"
:
 
"
e
m
p
t
y
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
s
l
o
t
[
$
{
p
o
s
}
]
 
e
m
p
t
y
,
 
p
l
a
c
e
 
$
{
k
}
 
h
e
r
e
`
,
 
c
h
a
i
n
s
:
 
[
]
,
 
s
l
o
t
s
:
 
[
.
.
.
s
l
o
t
s
]
,
 
p
r
o
b
e
T
r
a
i
l
:
 
[
.
.
.
t
r
a
i
l
]
,
 
c
u
r
s
o
r
:
 
p
o
s
,
 
l
o
a
d
F
a
c
t
o
r
:
 
n
 
/
 
s
i
z
e
,
 
c
u
r
r
e
n
t
K
e
y
:
 
k
 
}
)
;


 
 
 
 
 
 
 
 
s
l
o
t
s
[
p
o
s
]
 
=
 
k
;


 
 
 
 
 
 
 
 
n
+
+
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
 
p
o
s
,
 
v
a
l
u
e
:
 
k
 
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
p
o
s
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
P
l
a
c
e
d
 
$
{
k
}
 
a
t
 
i
n
d
e
x
 
$
{
p
o
s
}
`
,
 
c
h
a
i
n
s
:
 
[
]
,
 
s
l
o
t
s
:
 
[
.
.
.
s
l
o
t
s
]
,
 
p
r
o
b
e
T
r
a
i
l
:
 
[
.
.
.
t
r
a
i
l
]
,
 
c
u
r
s
o
r
:
 
p
o
s
,
 
j
u
s
t
I
n
s
e
r
t
e
d
:
 
p
o
s
,
 
l
o
a
d
F
a
c
t
o
r
:
 
n
 
/
 
s
i
z
e
,
 
c
u
r
r
e
n
t
K
e
y
:
 
k
 
}
)
;


 
 
 
 
 
 
 
 
b
r
e
a
k
;


 
 
 
 
 
 
}
 
e
l
s
e
 
i
f
 
(
s
l
o
t
s
[
p
o
s
]
 
=
=
=
 
k
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
 
i
,
 
p
o
s
,
 
e
x
i
s
t
i
n
g
:
 
k
 
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
s
l
o
t
[
$
{
p
o
s
}
]
 
a
l
r
e
a
d
y
 
h
a
s
 
$
{
k
}
,
 
s
k
i
p
`
,
 
c
h
a
i
n
s
:
 
[
]
,
 
s
l
o
t
s
:
 
[
.
.
.
s
l
o
t
s
]
,
 
p
r
o
b
e
T
r
a
i
l
:
 
[
.
.
.
t
r
a
i
l
]
,
 
c
u
r
s
o
r
:
 
p
o
s
,
 
l
o
a
d
F
a
c
t
o
r
:
 
n
 
/
 
s
i
z
e
,
 
c
u
r
r
e
n
t
K
e
y
:
 
k
 
}
)
;


 
 
 
 
 
 
 
 
b
r
e
a
k
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
 
3
,
 
v
a
r
s
:
 
{
 
i
,
 
p
o
s
,
 
e
x
i
s
t
i
n
g
:
 
s
l
o
t
s
[
p
o
s
]
 
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
s
l
o
t
[
$
{
p
o
s
}
]
 
o
c
c
u
p
i
e
d
 
b
y
 
$
{
s
l
o
t
s
[
p
o
s
]
}
,
 
c
o
l
l
i
s
i
o
n
,
 
p
r
o
b
e
 
n
e
x
t
`
,
 
c
h
a
i
n
s
:
 
[
]
,
 
s
l
o
t
s
:
 
[
.
.
.
s
l
o
t
s
]
,
 
p
r
o
b
e
T
r
a
i
l
:
 
[
.
.
.
t
r
a
i
l
]
,
 
c
u
r
s
o
r
:
 
p
o
s
,
 
l
o
a
d
F
a
c
t
o
r
:
 
n
 
/
 
s
i
z
e
,
 
c
u
r
r
e
n
t
K
e
y
:
 
k
 
}
)
;


 
 
 
 
 
 
 
 
i
+
+
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
 
i
 
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
i
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
d
v
a
n
c
e
 
p
r
o
b
e
:
 
i
 
=
 
$
{
i
}
,
 
n
e
x
t
 
p
o
s
 
=
 
$
{
(
h
 
+
 
i
)
 
%
 
s
i
z
e
}
`
,
 
c
h
a
i
n
s
:
 
[
]
,
 
s
l
o
t
s
:
 
[
.
.
.
s
l
o
t
s
]
,
 
p
r
o
b
e
T
r
a
i
l
:
 
[
.
.
.
t
r
a
i
l
]
,
 
c
u
r
s
o
r
:
 
(
h
 
+
 
i
)
 
%
 
s
i
z
e
,
 
l
o
a
d
F
a
c
t
o
r
:
 
n
 
/
 
s
i
z
e
,
 
c
u
r
r
e
n
t
K
e
y
:
 
k
 
}
)
;


 
 
 
 
 
 
}


 
 
 
 
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
K
e
y
s
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
 
 
H
a
s
h
 
t
a
b
l
e
 
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
 
H
a
s
h
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
 
s
t
r
a
t
e
g
y
,
 
s
i
z
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
 
s
t
r
a
t
e
g
y
:
 
S
t
r
a
t
e
g
y
;
 
s
i
z
e
:
 
n
u
m
b
e
r
 
}
)
 
{


 
 
c
o
n
s
t
 
B
U
C
K
E
T
_
W
 
=
 
5
8
;


 
 
c
o
n
s
t
 
B
U
C
K
E
T
_
H
 
=
 
5
4
;


 
 
c
o
n
s
t
 
t
a
b
l
e
W
 
=
 
s
i
z
e
 
*
 
(
B
U
C
K
E
T
_
W
 
+
 
8
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
2
0
,
 
t
a
b
l
e
W
 
+
 
6
0
)
}


 
 
 
 
 
 
 
 
h
e
i
g
h
t
=
{
s
t
r
a
t
e
g
y
 
=
=
=
 
"
c
h
a
i
n
i
n
g
"
 
?
 
4
0
0
 
:
 
2
6
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
-
h
h
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
a
c
c
e
n
t
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
/
*
 
H
a
s
h
 
f
u
n
c
t
i
o
n
 
b
o
x
 
*
/
}


 
 
 
 
 
 
 
 
<
r
e
c
t
 
x
=
{
2
0
}
 
y
=
{
2
0
}
 
w
i
d
t
h
=
{
2
4
0
}
 
h
e
i
g
h
t
=
{
5
0
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
`
$
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
1
0
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
a
c
c
e
n
t
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
1
4
0
}
 
y
=
{
4
0
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


 
 
 
 
 
 
 
 
 
 
h
(
k
e
y
)
 
=
 
k
e
y
 
m
o
d
 
{
s
i
z
e
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
1
4
0
}
 
y
=
{
5
8
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
2
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
f
r
a
m
e
.
c
u
r
r
e
n
t
K
e
y
 
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


 
 
 
 
 
 
 
 
 
 
 
 
?
 
`
$
{
f
r
a
m
e
.
c
u
r
r
e
n
t
K
e
y
}
 
m
o
d
 
$
{
s
i
z
e
}
 
=
 
$
{
(
(
f
r
a
m
e
.
c
u
r
r
e
n
t
K
e
y
 
%
 
s
i
z
e
)
 
+
 
s
i
z
e
)
 
%
 
s
i
z
e
}
`


 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
(
a
w
a
i
t
i
n
g
 
k
e
y
)
"
}


 
 
 
 
 
 
 
 
<
/
t
e
x
t
>




 
 
 
 
 
 
 
 
{
/
*
 
A
r
r
o
w
 
f
r
o
m
 
h
a
s
h
 
b
o
x
 
t
o
 
h
i
g
h
l
i
g
h
t
e
d
 
b
u
c
k
e
t
 
*
/
}


 
 
 
 
 
 
 
 
{
f
r
a
m
e
.
c
u
r
s
o
r
 
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
l
i
n
e
 
x
1
=
{
1
4
0
}
 
y
1
=
{
7
4
}


 
 
 
 
 
 
 
 
 
 
 
 
x
2
=
{
3
0
 
+
 
f
r
a
m
e
.
c
u
r
s
o
r
 
*
 
(
B
U
C
K
E
T
_
W
 
+
 
8
)
 
+
 
B
U
C
K
E
T
_
W
 
/
 
2
}
 
y
2
=
{
1
0
0
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
a
c
c
e
n
t
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
-
h
h
)
"


 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
{
/
*
 
T
a
b
l
e
 
b
u
c
k
e
t
s
 
*
/
}


 
 
 
 
 
 
 
 
{
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
 
s
i
z
e
 
}
)
.
m
a
p
(
(
_
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
B
U
C
K
E
T
_
W
 
+
 
8
)
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
y
 
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
 
h
i
g
h
l
i
g
h
t
e
d
 
=
 
f
r
a
m
e
.
c
u
r
s
o
r
 
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
 
j
u
s
t
I
n
s
 
=
 
f
r
a
m
e
.
j
u
s
t
I
n
s
e
r
t
e
d
 
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
 
s
t
r
o
k
e
 
=
 
j
u
s
t
I
n
s
 
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
 
h
i
g
h
l
i
g
h
t
e
d
 
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
 
b
g
 
=
 
j
u
s
t
I
n
s
 
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
5
)
"
 
:
 
h
i
g
h
l
i
g
h
t
e
d
 
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




 
 
 
 
 
 
 
 
 
 
i
f
 
(
s
t
r
a
t
e
g
y
 
=
=
=
 
"
c
h
a
i
n
i
n
g
"
)
 
{


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
t
e
m
s
 
=
 
f
r
a
m
e
.
c
h
a
i
n
s
[
i
]
 
|
|
 
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
g
 
k
e
y
=
{
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
B
U
C
K
E
T
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
B
U
C
K
E
T
_
H
}
 
r
x
=
{
6
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
 
B
U
C
K
E
T
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
 
B
U
C
K
E
T
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
4
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
 
"
∅
"
 
:
 
`
[
$
{
i
}
]
`
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
 
B
U
C
K
E
T
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
i
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
 
j
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
g
 
k
e
y
=
{
j
}
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
 
B
U
C
K
E
T
_
W
 
/
 
2
}
 
y
1
=
{
y
 
+
 
B
U
C
K
E
T
_
H
 
+
 
j
 
*
 
4
4
 
+
 
4
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
2
=
{
x
 
+
 
B
U
C
K
E
T
_
W
 
/
 
2
}
 
y
2
=
{
y
 
+
 
B
U
C
K
E
T
_
H
 
+
 
j
 
*
 
4
4
 
+
 
1
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
"
u
r
l
(
#
a
r
-
h
h
)
"
 
/
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
 
+
 
4
}
 
y
=
{
y
 
+
 
B
U
C
K
E
T
_
H
 
+
 
j
 
*
 
4
4
 
+
 
2
0
}
 
w
i
d
t
h
=
{
B
U
C
K
E
T
_
W
 
-
 
8
}
 
h
e
i
g
h
t
=
{
3
0
}
 
r
x
=
{
5
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
`
$
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
1
0
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
a
c
c
e
n
t
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
6
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
 
B
U
C
K
E
T
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
 
B
U
C
K
E
T
_
H
 
+
 
j
 
*
 
4
4
 
+
 
4
0
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
2
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
a
c
c
e
n
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
/
g
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
g
>


 
 
 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
v
 
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
t
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
 
i
n
T
r
a
i
l
 
=
 
f
r
a
m
e
.
p
r
o
b
e
T
r
a
i
l
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
i
)
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
p
r
o
b
e
I
d
x
 
=
 
f
r
a
m
e
.
p
r
o
b
e
T
r
a
i
l
.
i
n
d
e
x
O
f
(
i
)
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
t
r
a
i
l
S
t
r
o
k
e
 
=
 
i
n
T
r
a
i
l
 
?
 
"
#
f
5
9
e
0
b
"
 
:
 
s
t
r
o
k
e
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
t
r
a
i
l
B
g
 
=
 
i
n
T
r
a
i
l
 
&
&
 
!
j
u
s
t
I
n
s
 
?
 
"
r
g
b
a
(
2
4
5
,
1
5
8
,
1
1
,
0
.
1
4
)
"
 
:
 
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
B
U
C
K
E
T
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
B
U
C
K
E
T
_
H
}
 
r
x
=
{
6
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
t
r
a
i
l
B
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
t
r
a
i
l
S
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
 
B
U
C
K
E
T
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
 
B
U
C
K
E
T
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
4
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
 
v
 
=
=
=
 
n
u
l
l
 
?
 
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
 
=
=
=
 
n
u
l
l
 
?
 
"
∅
"
 
:
 
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
 
B
U
C
K
E
T
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
i
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
r
o
b
e
I
d
x
 
>
 
0
 
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
 
B
U
C
K
E
T
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
 
B
U
C
K
E
T
_
H
 
+
 
1
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
 
9
,
 
f
i
l
l
:
 
"
#
f
5
9
e
0
b
"
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
r
o
b
e
 
+
{
p
r
o
b
e
I
d
x
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


 
 
 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
<
/
s
v
g
>




 
 
 
 
 
 
{
/
*
 
L
o
a
d
 
f
a
c
t
o
r
 
g
a
u
g
e
 
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
m
t
-
3
 
f
l
e
x
 
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
L
o
a
d
 
f
a
c
t
o
r
 
α
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
r
e
l
a
t
i
v
e
 
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
"
 
s
t
y
l
e
=
{
{
 
w
i
d
t
h
:
 
2
0
0
,
 
h
e
i
g
h
t
:
 
1
2
 
}
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
a
b
s
o
l
u
t
e
 
l
e
f
t
-
0
 
t
o
p
-
0
 
b
o
t
t
o
m
-
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
a
l
l
"


 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
i
d
t
h
:
 
`
$
{
M
a
t
h
.
m
i
n
(
1
0
0
,
 
(
f
r
a
m
e
?
.
l
o
a
d
F
a
c
t
o
r
 
?
?
 
0
)
 
*
 
1
0
0
)
}
%
`
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
:
 
(
f
r
a
m
e
?
.
l
o
a
d
F
a
c
t
o
r
 
?
?
 
0
)
 
>
 
0
.
7
5
 
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
 
(
f
r
a
m
e
?
.
l
o
a
d
F
a
c
t
o
r
 
?
?
 
0
)
 
>
 
0
.
5
 
?
 
"
#
f
5
9
e
0
b
"
 
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
}


 
 
 
 
 
 
 
 
 
 
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
1
4
"
>


 
 
 
 
 
 
 
 
 
 
{
(
f
r
a
m
e
?
.
l
o
a
d
F
a
c
t
o
r
 
?
?
 
0
)
.
t
o
F
i
x
e
d
(
2
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
s
t
r
a
t
e
g
y
,
 
s
e
t
S
t
r
a
t
e
g
y
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
S
t
r
a
t
e
g
y
>
(
"
c
h
a
i
n
i
n
g
"
)
;


 
 
c
o
n
s
t
 
[
k
e
y
s
S
t
r
,
 
s
e
t
K
e
y
s
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
2
3
,
 
1
3
,
 
1
8
,
 
3
,
 
8
,
 
2
8
"
)
;


 
 
c
o
n
s
t
 
[
s
i
z
e
,
 
s
e
t
S
i
z
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
7
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
 
k
e
y
s
 
=
 
p
a
r
s
e
K
e
y
s
(
k
e
y
s
S
t
r
)
;


 
 
 
 
 
 
r
e
t
u
r
n
 
s
t
r
a
t
e
g
y
 
=
=
=
 
"
c
h
a
i
n
i
n
g
"
 
?
 
b
u
i
l
d
C
h
a
i
n
i
n
g
(
k
e
y
s
,
 
s
i
z
e
)
 
:
 
b
u
i
l
d
P
r
o
b
i
n
g
(
k
e
y
s
,
 
s
i
z
e
)
;


 
 
 
 
}
,


 
 
 
 
[
s
t
r
a
t
e
g
y
,
 
k
e
y
s
S
t
r
,
 
s
i
z
e
]
,


 
 
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
 
s
t
r
a
t
e
g
y
 
=
=
=
 
"
c
h
a
i
n
i
n
g
"
 
?
 
P
S
E
U
D
O
_
C
H
A
I
N
 
:
 
P
S
E
U
D
O
_
P
R
O
B
E
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
`
H
a
s
h
i
n
g
,
 
$
{
s
t
r
a
t
e
g
y
 
=
=
=
 
"
c
h
a
i
n
i
n
g
"
 
?
 
"
S
e
p
a
r
a
t
e
 
C
h
a
i
n
i
n
g
"
 
:
 
"
L
i
n
e
a
r
 
P
r
o
b
i
n
g
"
}
`
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
c
h
a
i
n
i
n
g
"
,
 
"
p
r
o
b
i
n
g
"
]
 
a
s
 
S
t
r
a
t
e
g
y
[
]
)
.
m
a
p
(
(
s
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
s
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
S
t
r
a
t
e
g
y
(
s
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
s
t
r
a
t
e
g
y
 
=
=
=
 
s
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
s
 
=
=
=
 
"
c
h
a
i
n
i
n
g
"
 
?
 
"
S
e
p
a
r
a
t
e
 
C
h
a
i
n
i
n
g
"
 
:
 
"
L
i
n
e
a
r
 
P
r
o
b
i
n
g
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
K
e
y
s
 
t
o
 
i
n
s
e
r
t
"


 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
k
e
y
s
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
e
.
g
.
 
2
3
,
 
1
3
,
 
1
8
,
 
3
"


 
 
 
 
 
 
 
 
 
 
 
 
h
e
l
p
e
r
=
"
I
n
t
e
g
e
r
 
k
e
y
s
,
 
c
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
C
o
l
l
i
s
i
o
n
s
"
,
 
v
a
l
u
e
:
 
"
3
,
 
1
0
,
 
1
7
,
 
2
4
,
 
3
1
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
M
i
x
e
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
2
3
,
 
1
3
,
 
1
8
,
 
3
,
 
8
,
 
2
8
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
S
p
a
r
s
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
5
,
 
1
9
,
 
3
3
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
e
a
v
y
 
p
r
o
b
i
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
7
,
 
1
4
,
 
2
1
,
 
2
8
,
 
3
5
,
 
4
2
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
K
e
y
s
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
 
5
 
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
K
e
y
s
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
 
8
0
)
 
+
 
1
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


 
 
 
 
 
 
 
 
 
 
 
 
T
a
b
l
e
 
s
i
z
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
s
i
z
e
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
S
i
z
e
(
M
a
t
h
.
m
a
x
(
2
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
1
3
,
 
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
 
2
)
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
i
n
=
{
2
}
 
m
a
x
=
{
1
3
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
H
a
s
h
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
 
s
t
r
a
t
e
g
y
=
{
s
t
r
a
t
e
g
y
}
 
s
i
z
e
=
{
s
i
z
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
H
a
s
h
 
f
u
n
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
A
 
d
e
t
e
r
m
i
n
i
s
t
i
c
 
m
a
p
 
f
r
o
m
 
k
e
y
s
 
t
o
 
a
r
r
a
y
 
i
n
d
i
c
e
s
.
 
'
k
e
y
 
m
o
d
 
s
i
z
e
'
 
i
s
 
t
h
e
 
s
i
m
p
l
e
s
t
.
 
G
o
o
d
 
h
a
s
h
 
f
u
n
c
t
i
o
n
s
 
d
i
s
t
r
i
b
u
t
e
 
k
e
y
s
 
u
n
i
f
o
r
m
l
y
 
a
c
r
o
s
s
 
b
u
c
k
e
t
s
.
"
 
}
,


 
 
 
 
{
 
t
:
 
"
C
o
l
l
i
s
i
o
n
s
 
a
r
e
 
i
n
e
v
i
t
a
b
l
e
"
,
 
b
:
 
"
B
y
 
p
i
g
e
o
n
h
o
l
e
:
 
i
f
 
y
o
u
 
h
a
v
e
 
m
o
r
e
 
k
e
y
s
 
t
h
a
n
 
b
u
c
k
e
t
s
,
 
t
w
o
 
k
e
y
s
 
m
u
s
t
 
c
o
l
l
i
d
e
.
 
H
a
s
h
 
t
a
b
l
e
s
 
h
a
n
d
l
e
 
t
h
i
s
,
 
n
o
t
 
a
v
o
i
d
 
i
t
.
"
 
}
,


 
 
 
 
{
 
t
:
 
"
S
e
p
a
r
a
t
e
 
c
h
a
i
n
i
n
g
"
,
 
b
:
 
"
E
a
c
h
 
b
u
c
k
e
t
 
h
o
l
d
s
 
a
 
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
.
 
C
o
l
l
i
s
i
o
n
s
 
a
p
p
e
n
d
 
t
o
 
t
h
e
 
l
i
s
t
.
 
S
i
m
p
l
e
,
 
l
o
o
k
u
p
 
=
 
O
(
1
 
+
 
α
)
 
o
n
 
a
v
e
r
a
g
e
.
 
W
a
s
t
e
s
 
s
o
m
e
 
p
o
i
n
t
e
r
 
m
e
m
o
r
y
.
"
 
}
,


 
 
 
 
{
 
t
:
 
"
L
i
n
e
a
r
 
p
r
o
b
i
n
g
 
(
o
p
e
n
 
a
d
d
r
e
s
s
i
n
g
)
"
,
 
b
:
 
"
O
n
 
c
o
l
l
i
s
i
o
n
,
 
t
r
y
 
n
e
x
t
 
s
l
o
t
,
 
t
h
e
n
 
n
e
x
t
,
 
t
h
e
n
 
n
e
x
t
.
 
K
e
y
s
 
l
i
v
e
 
i
n
 
t
h
e
 
t
a
b
l
e
 
i
t
s
e
l
f
,
 
c
a
c
h
e
-
f
r
i
e
n
d
l
y
.
 
P
e
r
f
o
r
m
a
n
c
e
 
d
e
g
r
a
d
e
s
 
s
h
a
r
p
l
y
 
w
h
e
n
 
α
 
→
 
1
.
"
 
}
,


 
 
 
 
{
 
t
:
 
"
L
o
a
d
 
f
a
c
t
o
r
 
α
 
=
 
n
 
/
 
s
i
z
e
"
,
 
b
:
 
"
T
h
e
 
o
c
c
u
p
a
n
c
y
 
r
a
t
i
o
.
 
F
o
r
 
c
h
a
i
n
i
n
g
 
α
 
c
a
n
 
e
x
c
e
e
d
 
1
.
 
F
o
r
 
p
r
o
b
i
n
g
 
y
o
u
 
w
a
n
t
 
α
 
≤
 
0
.
7
,
 
a
b
o
v
e
 
t
h
a
t
,
 
r
e
s
i
z
e
 
a
n
d
 
r
e
h
a
s
h
 
e
v
e
r
y
t
h
i
n
g
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
 
h
a
s
h
i
n
g
 
m
a
t
t
e
r
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
O
(
1
)
 
l
o
o
k
u
p
s
 
u
n
d
e
r
 
t
h
e
 
h
o
o
d
 
o
f
 
e
v
e
r
y
 
m
a
p
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


 
 
 
 
 
 
 
 
 
 
H
a
s
h
 
t
a
b
l
e
s
 
t
u
r
n
 
s
e
a
r
c
h
 
f
r
o
m
 
O
(
l
o
g
 
n
)
 
(
B
S
T
)
 
i
n
t
o
 
O
(
1
)
 
a
m
o
r
t
i
z
e
d
.
 
E
v
e
r
y
 
m
o
d
e
r
n
 
l
a
n
g
u
a
g
e
 
h
a
s


 
 
 
 
 
 
 
 
 
 
o
n
e
 
b
u
i
l
t
 
i
n
:
 
P
y
t
h
o
n
 
<
I
n
l
i
n
e
C
o
d
e
>
d
i
c
t
<
/
I
n
l
i
n
e
C
o
d
e
>
,
 
J
a
v
a
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
<
I
n
l
i
n
e
C
o
d
e
>
H
a
s
h
M
a
p
<
/
I
n
l
i
n
e
C
o
d
e
>
,
 
C
+
+
 
<
I
n
l
i
n
e
C
o
d
e
>
u
n
o
r
d
e
r
e
d
_
m
a
p
<
/
I
n
l
i
n
e
C
o
d
e
>
,
 
J
a
v
a
S
c
r
i
p
t
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
<
I
n
l
i
n
e
C
o
d
e
>
M
a
p
/
O
b
j
e
c
t
<
/
I
n
l
i
n
e
C
o
d
e
>
.
 
W
h
e
n
 
y
o
u
r
 
i
n
t
e
r
v
i
e
w
e
r
 
s
a
y
s
 
"
d
o
 
i
t
 
i
n
 
o
n
e
 
p
a
s
s
"
,
 
9
0
%
 
o
f


 
 
 
 
 
 
 
 
 
 
t
h
e
 
t
i
m
e
 
t
h
e
 
a
n
s
w
e
r
 
i
n
v
o
l
v
e
s
 
a
 
h
a
s
h
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
T
a
b
l
e
 
s
i
z
e
 
7
.
 
K
e
y
s
:
 
5
0
,
 
7
0
0
,
 
7
6
,
 
8
5
,
 
9
2
,
 
7
3
,
 
1
0
1
.
 
C
o
m
p
u
t
e
 
5
0
 
m
o
d
 
7
 
a
n
d
 
7
0
0
 
m
o
d
 
7
.
"
,
 
a
:
 
"
5
0
→
1
,
 
7
0
0
→
0
"
 
}
,


 
 
 
 
{
 
q
:
 
"
W
i
t
h
 
l
i
n
e
a
r
 
p
r
o
b
i
n
g
,
 
k
e
y
s
 
1
0
,
 
2
0
,
 
3
0
 
i
n
t
o
 
s
i
z
e
 
5
.
 
W
h
e
r
e
 
d
o
e
s
 
2
0
 
l
a
n
d
?
"
,
 
a
:
 
"
I
n
d
e
x
 
1
 
(
1
0
→
0
,
 
2
0
 
p
r
o
b
e
s
 
0
,
 
t
h
e
n
 
l
a
n
d
s
 
a
t
 
1
)
"
 
}
,


 
 
 
 
{
 
q
:
 
"
T
a
b
l
e
 
s
i
z
e
 
1
1
,
 
s
e
p
a
r
a
t
e
 
c
h
a
i
n
i
n
g
,
 
3
3
 
k
e
y
s
 
i
n
s
e
r
t
e
d
 
u
n
i
f
o
r
m
l
y
.
 
L
o
a
d
 
f
a
c
t
o
r
?
"
,
 
a
:
 
"
3
3
/
1
1
 
=
 
3
.
0
"
 
}
,


 
 
 
 
{
 
q
:
 
"
W
h
y
 
i
s
 
p
r
o
b
i
n
g
 
p
o
o
r
 
w
h
e
n
 
α
 
>
 
0
.
7
?
"
,
 
a
:
 
"
P
r
i
m
a
r
y
 
c
l
u
s
t
e
r
i
n
g
,
 
l
o
n
g
 
r
u
n
s
 
c
a
u
s
e
 
e
v
e
r
y
 
p
r
o
b
e
 
t
o
 
v
i
s
i
t
 
m
a
n
y
 
o
c
c
u
p
i
e
d
 
c
e
l
l
s
,
 
t
u
r
n
i
n
g
 
O
(
1
)
 
i
n
t
o
 
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
6
4
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
 
p
r
i
m
e
 
t
a
b
l
e
 
s
i
z
e
s
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


 
 
 
 
 
 
 
 
 
 
W
i
t
h
 
'
k
e
y
 
m
o
d
 
s
i
z
e
'
,
 
i
f
 
s
i
z
e
 
h
a
s
 
m
a
n
y
 
d
i
v
i
s
o
r
s
 
(
l
i
k
e
 
p
o
w
e
r
s
 
o
f
 
2
)
,
 
i
n
p
u
t
 
k
e
y
s
 
s
h
a
r
i
n
g
 
t
h
o
s
e


 
 
 
 
 
 
 
 
 
 
d
i
v
i
s
o
r
s
 
c
o
l
l
i
d
e
 
s
y
s
t
e
m
a
t
i
c
a
l
l
y
.
 
A
 
p
r
i
m
e
 
h
a
s
 
n
o
 
s
m
a
l
l
 
d
i
v
i
s
o
r
s
,
 
t
h
e
 
m
o
d
u
l
o
 
s
p
r
e
a
d
s
 
k
e
y
s
 
m
o
r
e


 
 
 
 
 
 
 
 
 
 
e
v
e
n
l
y
.
 
J
a
v
a
'
s
 
H
a
s
h
M
a
p
 
u
s
e
s
 
p
o
w
e
r
-
o
f
-
t
w
o
 
s
i
z
e
s
 
+
 
a
 
b
i
t
-
m
i
x
i
n
g
 
s
t
e
p
 
t
o
 
c
o
m
p
e
n
s
a
t
e
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
W
h
e
r
e
 
h
a
s
h
i
n
g
 
w
i
n
s
 
i
n
 
i
n
t
e
r
v
i
e
w
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
T
w
o
-
s
u
m
:
 
s
e
e
n
-
s
e
t
 
o
f
 
c
o
m
p
l
e
m
e
n
t
s
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
L
o
n
g
e
s
t
 
s
u
b
s
t
r
i
n
g
 
w
i
t
h
o
u
t
 
r
e
p
e
a
t
i
n
g
 
c
h
a
r
a
c
t
e
r
s
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
G
r
o
u
p
 
a
n
a
g
r
a
m
s
 
(
h
a
s
h
 
b
y
 
s
o
r
t
e
d
 
k
e
y
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
S
u
b
a
r
r
a
y
 
s
u
m
 
e
q
u
a
l
s
 
K
 
(
p
r
e
f
i
x
-
s
u
m
 
h
a
s
h
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
L
R
U
 
c
a
c
h
e
 
(
h
a
s
h
 
+
 
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
)
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
H
a
s
h
i
n
g
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
A
 
h
a
s
h
 
t
a
b
l
e
 
o
f
 
s
i
z
e
 
1
0
 
u
s
e
s
 
h
(
k
)
 
=
 
k
 
m
o
d
 
1
0
.
 
I
n
s
e
r
t
i
n
g
 
k
e
y
s
 
1
5
 
a
n
d
 
2
5
 
u
s
i
n
g
 
s
e
p
a
r
a
t
e
 
c
h
a
i
n
i
n
g
,
 
w
h
e
r
e
 
d
o
 
t
h
e
y
 
l
a
n
d
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
B
o
t
h
 
a
t
 
i
n
d
e
x
 
5
"
,
 
"
1
5
 
a
t
 
1
,
 
2
5
 
a
t
 
5
"
,
 
"
1
5
 
a
t
 
5
,
 
2
5
 
a
t
 
6
 
(
p
r
o
b
e
)
"
,
 
"
R
e
h
a
s
h
i
n
g
 
t
r
i
g
g
e
r
e
d
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
B
o
t
h
 
1
5
 
m
o
d
 
1
0
 
a
n
d
 
2
5
 
m
o
d
 
1
0
 
e
q
u
a
l
 
5
.
 
W
i
t
h
 
c
h
a
i
n
i
n
g
,
 
b
o
t
h
 
e
n
d
 
u
p
 
i
n
 
t
h
e
 
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
 
a
t
 
b
u
c
k
e
t
 
5
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
P
r
i
m
a
r
y
 
c
l
u
s
t
e
r
i
n
g
 
i
s
 
a
 
w
e
a
k
n
e
s
s
 
o
f
 
w
h
i
c
h
 
c
o
l
l
i
s
i
o
n
 
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
 
m
e
t
h
o
d
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
S
e
p
a
r
a
t
e
 
c
h
a
i
n
i
n
g
"
,
 
"
L
i
n
e
a
r
 
p
r
o
b
i
n
g
"
,
 
"
Q
u
a
d
r
a
t
i
c
 
p
r
o
b
i
n
g
"
,
 
"
D
o
u
b
l
e
 
h
a
s
h
i
n
g
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
L
i
n
e
a
r
 
p
r
o
b
i
n
g
 
c
r
e
a
t
e
s
 
c
o
n
t
i
g
u
o
u
s
 
r
u
n
s
 
o
f
 
f
i
l
l
e
d
 
c
e
l
l
s
 
t
h
a
t
 
g
r
o
w
 
a
n
d
 
m
e
r
g
e
,
 
f
u
t
u
r
e
 
i
n
s
e
r
t
i
o
n
s
 
m
u
s
t
 
t
r
a
v
e
r
s
e
 
t
h
e
s
e
 
r
u
n
s
,
 
d
e
g
r
a
d
i
n
g
 
p
e
r
f
o
r
m
a
n
c
e
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
 
a
 
h
a
s
h
 
t
a
b
l
e
 
w
i
t
h
 
s
e
p
a
r
a
t
e
 
c
h
a
i
n
i
n
g
,
 
n
 
k
e
y
s
 
a
n
d
 
m
 
b
u
c
k
e
t
s
,
 
a
v
e
r
a
g
e
 
s
e
a
r
c
h
 
c
o
s
t
 
i
s
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
1
 
+
 
α
)
 
w
h
e
r
e
 
α
 
=
 
n
/
m
"
,
 
"
O
(
n
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
E
x
p
e
c
t
e
d
 
c
h
a
i
n
 
l
e
n
g
t
h
 
e
q
u
a
l
s
 
t
h
e
 
l
o
a
d
 
f
a
c
t
o
r
 
α
.
 
L
o
o
k
u
p
 
s
c
a
n
s
 
o
n
e
 
c
h
a
i
n
 
+
 
t
h
e
 
O
(
1
)
 
h
a
s
h
 
→
 
O
(
1
 
+
 
α
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
W
h
y
 
i
s
 
'
m
o
d
 
p
r
i
m
e
'
 
p
r
e
f
e
r
r
e
d
 
f
o
r
 
h
a
s
h
-
t
a
b
l
e
 
s
i
z
e
s
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
P
r
i
m
e
 
s
i
z
e
s
 
u
s
e
 
l
e
s
s
 
m
e
m
o
r
y
"
,


 
 
 
 
 
 
 
 
"
T
h
e
y
 
a
l
l
o
w
 
n
e
g
a
t
i
v
e
 
k
e
y
s
"
,


 
 
 
 
 
 
 
 
"
T
h
e
y
 
m
i
n
i
m
i
z
e
 
s
y
s
t
e
m
a
t
i
c
 
c
o
l
l
i
s
i
o
n
s
 
w
h
e
n
 
k
e
y
s
 
s
h
a
r
e
 
f
a
c
t
o
r
s
"
,


 
 
 
 
 
 
 
 
"
T
h
e
y
 
f
o
r
c
e
 
c
h
a
i
n
i
n
g
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
C
o
m
p
o
s
i
t
e
 
s
i
z
e
s
 
(
e
s
p
e
c
i
a
l
l
y
 
p
o
w
e
r
s
 
o
f
 
2
 
w
i
t
h
o
u
t
 
e
x
t
r
a
 
m
i
x
i
n
g
)
 
m
a
p
 
k
e
y
s
 
s
h
a
r
i
n
g
 
f
a
c
t
o
r
s
 
t
o
 
t
h
e
 
s
a
m
e
 
b
u
c
k
e
t
.
 
P
r
i
m
e
s
 
h
a
v
e
 
n
o
 
s
m
a
l
l
 
d
i
v
i
s
o
r
s
,
 
s
p
r
e
a
d
i
n
g
 
k
e
y
s
 
e
v
e
n
l
y
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
H
a
s
h
i
n
g
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
6
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
a
s
h
 
m
a
p
s
 
p
o
w
e
r
 
t
w
o
-
s
u
m
,
 
g
r
o
u
p
-
a
n
a
g
r
a
m
s
,
 
L
R
U
 
c
a
c
h
e
,
 
a
l
m
o
s
t
 
e
v
e
r
y
 
i
n
t
e
r
v
i
e
w
 
u
s
e
s
 
o
n
e
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
B
i
n
a
r
y
 
T
r
e
e
 
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


