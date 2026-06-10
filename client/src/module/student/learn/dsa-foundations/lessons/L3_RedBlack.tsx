
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
e
d
-
B
l
a
c
k
 
t
r
e
e
 
m
o
d
e
l
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
C
o
l
o
r
 
=
 
"
R
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
 
R
B
N
o
d
e
 
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
;


 
 
k
e
y
:
 
n
u
m
b
e
r
;


 
 
c
o
l
o
r
:
 
C
o
l
o
r
;


 
 
p
a
r
e
n
t
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
e
f
t
?
:
 
s
t
r
i
n
g
;


 
 
r
i
g
h
t
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
 
R
B
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
 
R
B
N
o
d
e
>
;


 
 
r
o
o
t
I
d
?
:
 
s
t
r
i
n
g
;


 
 
a
c
t
i
v
e
I
d
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
a
s
e
T
a
g
?
:
 
"
C
1
"
 
|
 
"
C
2
"
 
|
 
"
C
3
"
 
|
 
"
B
S
T
"
 
|
 
"
R
O
O
T
"
 
|
 
"
D
O
N
E
"
;


}




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
R
B
 
=
 
[


 
 
"
#
 
R
e
d
-
B
l
a
c
k
 
i
n
s
e
r
t
 
(
n
e
w
 
n
o
d
e
s
 
s
t
a
r
t
 
R
E
D
)
"
,


 
 
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
 
 
p
e
r
f
o
r
m
 
s
t
a
n
d
a
r
d
 
B
S
T
 
i
n
s
e
r
t
;
 
n
e
w
 
n
o
d
e
 
z
 
=
 
R
E
D
"
,


 
 
"
 
 
w
h
i
l
e
 
z
 
!
=
 
r
o
o
t
 
a
n
d
 
p
a
r
e
n
t
(
z
)
.
c
o
l
o
r
 
=
=
 
R
E
D
:
"
,


 
 
"
 
 
 
 
l
e
t
 
g
 
=
 
g
r
a
n
d
p
a
r
e
n
t
(
z
)
,
 
u
 
=
 
u
n
c
l
e
 
o
f
 
z
"
,


 
 
"
 
 
 
 
C
a
s
e
 
1
:
 
u
 
i
s
 
R
E
D
 
-
>
 
r
e
c
o
l
o
r
 
p
a
r
e
n
t
+
u
n
c
l
e
 
B
L
A
C
K
,
"
,


 
 
"
 
 
 
 
 
 
 
 
 
 
 
 
g
 
R
E
D
;
 
z
 
<
-
 
g
;
 
c
o
n
t
i
n
u
e
"
,


 
 
"
 
 
 
 
C
a
s
e
 
2
 
(
z
i
g
-
z
a
g
)
:
 
r
o
t
a
t
e
 
p
a
r
e
n
t
 
t
o
 
m
a
k
e
 
l
i
n
e
"
,


 
 
"
 
 
 
 
C
a
s
e
 
3
 
(
l
i
n
e
)
:
 
 
 
 
r
o
t
a
t
e
 
g
,
 
s
w
a
p
 
c
o
l
o
r
s
 
o
f
"
,


 
 
"
 
 
 
 
 
 
 
 
 
 
 
 
o
l
d
 
p
a
r
e
n
t
 
a
n
d
 
o
l
d
 
g
"
,


 
 
"
 
 
r
o
o
t
.
c
o
l
o
r
 
=
 
B
L
A
C
K
 
 
 
#
 
i
n
v
a
r
i
a
n
t
 
2
 
a
l
w
a
y
s
 
h
o
l
d
s
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
 
c
l
o
n
e
R
B
(
n
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
 
R
B
N
o
d
e
>
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
 
R
B
N
o
d
e
>
 
{


 
 
c
o
n
s
t
 
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
 
R
B
N
o
d
e
>
 
=
 
{
}
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
 
i
n
 
n
)
 
r
[
k
]
 
=
 
{
 
.
.
.
n
[
k
]
 
}
;


 
 
r
e
t
u
r
n
 
r
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
R
B
F
r
a
m
e
s
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
)
:
 
R
B
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
r
a
m
e
s
:
 
R
B
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
o
d
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
 
R
B
N
o
d
e
>
 
=
 
{
}
;


 
 
l
e
t
 
r
o
o
t
I
d
:
 
s
t
r
i
n
g
 
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
;


 
 
l
e
t
 
c
o
u
n
t
e
r
 
=
 
0
;


 
 
c
o
n
s
t
 
m
k
I
d
 
=
 
(
)
 
=
>
 
`
r
$
{
c
o
u
n
t
e
r
+
+
}
`
;




 
 
f
u
n
c
t
i
o
n
 
s
n
a
p
(


 
 
 
 
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
r
i
n
g
,


 
 
 
 
a
c
t
i
v
e
I
d
?
:
 
s
t
r
i
n
g
,


 
 
 
 
c
a
s
e
T
a
g
?
:
 
R
B
F
r
a
m
e
[
"
c
a
s
e
T
a
g
"
]
,


 
 
)
 
{


 
 
 
 
f
r
a
m
e
s
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
,


 
 
 
 
 
 
v
a
r
s
:
 
{


 
 
 
 
 
 
 
 
n
o
d
e
s
:
 
O
b
j
e
c
t
.
k
e
y
s
(
n
o
d
e
s
)
.
l
e
n
g
t
h
,


 
 
 
 
 
 
 
 
r
o
o
t
:
 
r
o
o
t
I
d
 
?
?
 
"
-
"
,


 
 
 
 
 
 
 
 
c
a
s
e
:
 
c
a
s
e
T
a
g
 
?
?
 
"
"
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
m
e
s
s
a
g
e
,


 
 
 
 
 
 
n
o
d
e
s
:
 
c
l
o
n
e
R
B
(
n
o
d
e
s
)
,


 
 
 
 
 
 
r
o
o
t
I
d
,


 
 
 
 
 
 
a
c
t
i
v
e
I
d
,


 
 
 
 
 
 
c
a
s
e
T
a
g
,


 
 
 
 
}
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
 
r
o
t
a
t
e
L
e
f
t
(
x
I
d
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
n
s
t
 
x
 
=
 
n
o
d
e
s
[
x
I
d
]
;


 
 
 
 
c
o
n
s
t
 
y
I
d
 
=
 
x
.
r
i
g
h
t
!
;


 
 
 
 
c
o
n
s
t
 
y
 
=
 
n
o
d
e
s
[
y
I
d
]
;


 
 
 
 
x
.
r
i
g
h
t
 
=
 
y
.
l
e
f
t
;


 
 
 
 
i
f
 
(
y
.
l
e
f
t
)
 
n
o
d
e
s
[
y
.
l
e
f
t
]
.
p
a
r
e
n
t
 
=
 
x
I
d
;


 
 
 
 
y
.
p
a
r
e
n
t
 
=
 
x
.
p
a
r
e
n
t
;


 
 
 
 
i
f
 
(
!
x
.
p
a
r
e
n
t
)
 
r
o
o
t
I
d
 
=
 
y
I
d
;


 
 
 
 
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
 
p
 
=
 
n
o
d
e
s
[
x
.
p
a
r
e
n
t
]
;


 
 
 
 
 
 
i
f
 
(
p
.
l
e
f
t
 
=
=
=
 
x
I
d
)
 
p
.
l
e
f
t
 
=
 
y
I
d
;


 
 
 
 
 
 
e
l
s
e
 
p
.
r
i
g
h
t
 
=
 
y
I
d
;


 
 
 
 
}


 
 
 
 
y
.
l
e
f
t
 
=
 
x
I
d
;


 
 
 
 
x
.
p
a
r
e
n
t
 
=
 
y
I
d
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
 
r
o
t
a
t
e
R
i
g
h
t
(
x
I
d
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
n
s
t
 
x
 
=
 
n
o
d
e
s
[
x
I
d
]
;


 
 
 
 
c
o
n
s
t
 
y
I
d
 
=
 
x
.
l
e
f
t
!
;


 
 
 
 
c
o
n
s
t
 
y
 
=
 
n
o
d
e
s
[
y
I
d
]
;


 
 
 
 
x
.
l
e
f
t
 
=
 
y
.
r
i
g
h
t
;


 
 
 
 
i
f
 
(
y
.
r
i
g
h
t
)
 
n
o
d
e
s
[
y
.
r
i
g
h
t
]
.
p
a
r
e
n
t
 
=
 
x
I
d
;


 
 
 
 
y
.
p
a
r
e
n
t
 
=
 
x
.
p
a
r
e
n
t
;


 
 
 
 
i
f
 
(
!
x
.
p
a
r
e
n
t
)
 
r
o
o
t
I
d
 
=
 
y
I
d
;


 
 
 
 
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
 
p
 
=
 
n
o
d
e
s
[
x
.
p
a
r
e
n
t
]
;


 
 
 
 
 
 
i
f
 
(
p
.
l
e
f
t
 
=
=
=
 
x
I
d
)
 
p
.
l
e
f
t
 
=
 
y
I
d
;


 
 
 
 
 
 
e
l
s
e
 
p
.
r
i
g
h
t
 
=
 
y
I
d
;


 
 
 
 
}


 
 
 
 
y
.
r
i
g
h
t
 
=
 
x
I
d
;


 
 
 
 
x
.
p
a
r
e
n
t
 
=
 
y
I
d
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
 
f
i
x
U
p
(
z
I
d
:
 
s
t
r
i
n
g
)
 
{


 
 
 
 
w
h
i
l
e
 
(
z
I
d
 
&
&
 
n
o
d
e
s
[
z
I
d
]
.
p
a
r
e
n
t
 
&
&
 
n
o
d
e
s
[
n
o
d
e
s
[
z
I
d
]
.
p
a
r
e
n
t
!
]
.
c
o
l
o
r
 
=
=
=
 
"
R
"
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
p
I
d
 
=
 
n
o
d
e
s
[
z
I
d
]
.
p
a
r
e
n
t
!
;


 
 
 
 
 
 
c
o
n
s
t
 
g
I
d
 
=
 
n
o
d
e
s
[
p
I
d
]
.
p
a
r
e
n
t
!
;


 
 
 
 
 
 
i
f
 
(
!
g
I
d
)
 
b
r
e
a
k
;


 
 
 
 
 
 
c
o
n
s
t
 
g
 
=
 
n
o
d
e
s
[
g
I
d
]
;


 
 
 
 
 
 
i
f
 
(
p
I
d
 
=
=
=
 
g
.
l
e
f
t
)
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
u
n
c
l
e
I
d
 
=
 
g
.
r
i
g
h
t
;


 
 
 
 
 
 
 
 
i
f
 
(
u
n
c
l
e
I
d
 
&
&
 
n
o
d
e
s
[
u
n
c
l
e
I
d
]
.
c
o
l
o
r
 
=
=
=
 
"
R
"
)
 
{


 
 
 
 
 
 
 
 
 
 
n
o
d
e
s
[
p
I
d
]
.
c
o
l
o
r
 
=
 
"
B
"
;


 
 
 
 
 
 
 
 
 
 
n
o
d
e
s
[
u
n
c
l
e
I
d
]
.
c
o
l
o
r
 
=
 
"
B
"
;


 
 
 
 
 
 
 
 
 
 
g
.
c
o
l
o
r
 
=
 
"
R
"
;


 
 
 
 
 
 
 
 
 
 
s
n
a
p
(


 
 
 
 
 
 
 
 
 
 
 
 
6
,


 
 
 
 
 
 
 
 
 
 
 
 
`
C
a
s
e
 
1
:
 
u
n
c
l
e
 
i
s
 
R
E
D
 
-
>
 
r
e
c
o
l
o
r
 
p
a
r
e
n
t
+
u
n
c
l
e
 
B
L
A
C
K
,
 
g
r
a
n
d
p
a
r
e
n
t
 
R
E
D
.
 
C
o
n
t
i
n
u
e
 
f
r
o
m
 
g
r
a
n
d
p
a
r
e
n
t
.
`
,


 
 
 
 
 
 
 
 
 
 
 
 
g
I
d
,


 
 
 
 
 
 
 
 
 
 
 
 
"
C
1
"
,


 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
 
 
z
I
d
 
=
 
g
I
d
;


 
 
 
 
 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
 
 
 
 
i
f
 
(
z
I
d
 
=
=
=
 
n
o
d
e
s
[
p
I
d
]
.
r
i
g
h
t
)
 
{


 
 
 
 
 
 
 
 
 
 
 
 
z
I
d
 
=
 
p
I
d
;


 
 
 
 
 
 
 
 
 
 
 
 
r
o
t
a
t
e
L
e
f
t
(
z
I
d
)
;


 
 
 
 
 
 
 
 
 
 
 
 
s
n
a
p
(
8
,
 
`
C
a
s
e
 
2
 
(
z
i
g
-
z
a
g
)
:
 
r
o
t
a
t
e
 
l
e
f
t
 
a
r
o
u
n
d
 
p
a
r
e
n
t
 
t
o
 
m
a
k
e
 
a
 
l
i
n
e
.
`
,
 
z
I
d
,
 
"
C
2
"
)
;


 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
n
o
d
e
s
[
n
o
d
e
s
[
z
I
d
]
.
p
a
r
e
n
t
!
]
.
c
o
l
o
r
 
=
 
"
B
"
;


 
 
 
 
 
 
 
 
 
 
n
o
d
e
s
[
n
o
d
e
s
[
n
o
d
e
s
[
z
I
d
]
.
p
a
r
e
n
t
!
]
.
p
a
r
e
n
t
!
]
.
c
o
l
o
r
 
=
 
"
R
"
;


 
 
 
 
 
 
 
 
 
 
r
o
t
a
t
e
R
i
g
h
t
(
n
o
d
e
s
[
n
o
d
e
s
[
z
I
d
]
.
p
a
r
e
n
t
!
]
.
p
a
r
e
n
t
!
)
;


 
 
 
 
 
 
 
 
 
 
s
n
a
p
(


 
 
 
 
 
 
 
 
 
 
 
 
9
,


 
 
 
 
 
 
 
 
 
 
 
 
`
C
a
s
e
 
3
 
(
l
i
n
e
)
:
 
r
o
t
a
t
e
 
r
i
g
h
t
 
a
r
o
u
n
d
 
g
r
a
n
d
p
a
r
e
n
t
 
+
 
r
e
c
o
l
o
r
 
(
o
l
d
-
p
a
r
e
n
t
 
B
L
A
C
K
,
 
o
l
d
-
g
r
a
n
d
p
a
r
e
n
t
 
R
E
D
)
.
`
,


 
 
 
 
 
 
 
 
 
 
 
 
z
I
d
,


 
 
 
 
 
 
 
 
 
 
 
 
"
C
3
"
,


 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
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
 
u
n
c
l
e
I
d
 
=
 
g
.
l
e
f
t
;


 
 
 
 
 
 
 
 
i
f
 
(
u
n
c
l
e
I
d
 
&
&
 
n
o
d
e
s
[
u
n
c
l
e
I
d
]
.
c
o
l
o
r
 
=
=
=
 
"
R
"
)
 
{


 
 
 
 
 
 
 
 
 
 
n
o
d
e
s
[
p
I
d
]
.
c
o
l
o
r
 
=
 
"
B
"
;


 
 
 
 
 
 
 
 
 
 
n
o
d
e
s
[
u
n
c
l
e
I
d
]
.
c
o
l
o
r
 
=
 
"
B
"
;


 
 
 
 
 
 
 
 
 
 
g
.
c
o
l
o
r
 
=
 
"
R
"
;


 
 
 
 
 
 
 
 
 
 
s
n
a
p
(
6
,
 
`
C
a
s
e
 
1
 
(
m
i
r
r
o
r
)
:
 
u
n
c
l
e
 
i
s
 
R
E
D
 
-
>
 
r
e
c
o
l
o
r
.
`
,
 
g
I
d
,
 
"
C
1
"
)
;


 
 
 
 
 
 
 
 
 
 
z
I
d
 
=
 
g
I
d
;


 
 
 
 
 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
 
 
 
 
i
f
 
(
z
I
d
 
=
=
=
 
n
o
d
e
s
[
p
I
d
]
.
l
e
f
t
)
 
{


 
 
 
 
 
 
 
 
 
 
 
 
z
I
d
 
=
 
p
I
d
;


 
 
 
 
 
 
 
 
 
 
 
 
r
o
t
a
t
e
R
i
g
h
t
(
z
I
d
)
;


 
 
 
 
 
 
 
 
 
 
 
 
s
n
a
p
(
8
,
 
`
C
a
s
e
 
2
 
(
m
i
r
r
o
r
)
:
 
r
o
t
a
t
e
 
r
i
g
h
t
 
a
r
o
u
n
d
 
p
a
r
e
n
t
 
t
o
 
m
a
k
e
 
a
 
l
i
n
e
.
`
,
 
z
I
d
,
 
"
C
2
"
)
;


 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
n
o
d
e
s
[
n
o
d
e
s
[
z
I
d
]
.
p
a
r
e
n
t
!
]
.
c
o
l
o
r
 
=
 
"
B
"
;


 
 
 
 
 
 
 
 
 
 
n
o
d
e
s
[
n
o
d
e
s
[
n
o
d
e
s
[
z
I
d
]
.
p
a
r
e
n
t
!
]
.
p
a
r
e
n
t
!
]
.
c
o
l
o
r
 
=
 
"
R
"
;


 
 
 
 
 
 
 
 
 
 
r
o
t
a
t
e
L
e
f
t
(
n
o
d
e
s
[
n
o
d
e
s
[
z
I
d
]
.
p
a
r
e
n
t
!
]
.
p
a
r
e
n
t
!
)
;


 
 
 
 
 
 
 
 
 
 
s
n
a
p
(
9
,
 
`
C
a
s
e
 
3
 
(
m
i
r
r
o
r
)
:
 
r
o
t
a
t
e
 
l
e
f
t
 
a
r
o
u
n
d
 
g
r
a
n
d
p
a
r
e
n
t
 
+
 
r
e
c
o
l
o
r
.
`
,
 
z
I
d
,
 
"
C
3
"
)
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
}


 
 
 
 
}


 
 
 
 
i
f
 
(
r
o
o
t
I
d
)
 
n
o
d
e
s
[
r
o
o
t
I
d
]
.
c
o
l
o
r
 
=
 
"
B
"
;


 
 
}




 
 
s
n
a
p
(
0
,
 
"
E
m
p
t
y
 
R
e
d
-
B
l
a
c
k
 
t
r
e
e
.
"
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
e
y
 
o
f
 
k
e
y
s
)
 
{


 
 
 
 
c
o
n
s
t
 
i
d
 
=
 
m
k
I
d
(
)
;


 
 
 
 
n
o
d
e
s
[
i
d
]
 
=
 
{
 
i
d
,
 
k
e
y
,
 
c
o
l
o
r
:
 
"
R
"
 
}
;


 
 
 
 
i
f
 
(
!
r
o
o
t
I
d
)
 
{


 
 
 
 
 
 
r
o
o
t
I
d
 
=
 
i
d
;


 
 
 
 
 
 
n
o
d
e
s
[
i
d
]
.
c
o
l
o
r
 
=
 
"
B
"
;


 
 
 
 
 
 
s
n
a
p
(
2
,
 
`
I
n
s
e
r
t
 
$
{
k
e
y
}
 
a
s
 
r
o
o
t
.
 
R
o
o
t
 
i
s
 
a
l
w
a
y
s
 
B
L
A
C
K
 
(
i
n
v
a
r
i
a
n
t
 
2
)
.
`
,
 
i
d
,
 
"
R
O
O
T
"
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


 
 
 
 
l
e
t
 
c
u
r
 
=
 
r
o
o
t
I
d
;


 
 
 
 
w
h
i
l
e
 
(
t
r
u
e
)
 
{


 
 
 
 
 
 
i
f
 
(
k
e
y
 
<
 
n
o
d
e
s
[
c
u
r
]
.
k
e
y
)
 
{


 
 
 
 
 
 
 
 
i
f
 
(
!
n
o
d
e
s
[
c
u
r
]
.
l
e
f
t
)
 
{


 
 
 
 
 
 
 
 
 
 
n
o
d
e
s
[
c
u
r
]
.
l
e
f
t
 
=
 
i
d
;


 
 
 
 
 
 
 
 
 
 
n
o
d
e
s
[
i
d
]
.
p
a
r
e
n
t
 
=
 
c
u
r
;


 
 
 
 
 
 
 
 
 
 
b
r
e
a
k
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
c
u
r
 
=
 
n
o
d
e
s
[
c
u
r
]
.
l
e
f
t
!
;


 
 
 
 
 
 
}
 
e
l
s
e
 
i
f
 
(
k
e
y
 
>
 
n
o
d
e
s
[
c
u
r
]
.
k
e
y
)
 
{


 
 
 
 
 
 
 
 
i
f
 
(
!
n
o
d
e
s
[
c
u
r
]
.
r
i
g
h
t
)
 
{


 
 
 
 
 
 
 
 
 
 
n
o
d
e
s
[
c
u
r
]
.
r
i
g
h
t
 
=
 
i
d
;


 
 
 
 
 
 
 
 
 
 
n
o
d
e
s
[
i
d
]
.
p
a
r
e
n
t
 
=
 
c
u
r
;


 
 
 
 
 
 
 
 
 
 
b
r
e
a
k
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
c
u
r
 
=
 
n
o
d
e
s
[
c
u
r
]
.
r
i
g
h
t
!
;


 
 
 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
 
 
d
e
l
e
t
e
 
n
o
d
e
s
[
i
d
]
;


 
 
 
 
 
 
 
 
s
n
a
p
(
2
,
 
`
I
n
s
e
r
t
 
$
{
k
e
y
}
:
 
d
u
p
l
i
c
a
t
e
 
(
B
S
T
s
 
d
i
s
a
l
l
o
w
)
.
 
S
k
i
p
p
i
n
g
.
`
,
 
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
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
f
r
a
m
e
s
;


 
 
 
 
 
 
}


 
 
 
 
}


 
 
 
 
s
n
a
p
(


 
 
 
 
 
 
2
,


 
 
 
 
 
 
`
B
S
T
 
i
n
s
e
r
t
 
$
{
k
e
y
}
 
(
R
E
D
)
 
a
s
 
$
{


 
 
 
 
 
 
 
 
k
e
y
 
<
 
n
o
d
e
s
[
n
o
d
e
s
[
i
d
]
.
p
a
r
e
n
t
!
]
.
k
e
y
 
?
 
"
l
e
f
t
"
 
:
 
"
r
i
g
h
t
"


 
 
 
 
 
 
}
 
c
h
i
l
d
 
o
f
 
$
{
n
o
d
e
s
[
n
o
d
e
s
[
i
d
]
.
p
a
r
e
n
t
!
]
.
k
e
y
}
.
`
,


 
 
 
 
 
 
i
d
,


 
 
 
 
 
 
"
B
S
T
"
,


 
 
 
 
)
;


 
 
 
 
f
i
x
U
p
(
i
d
)
;


 
 
 
 
s
n
a
p
(
1
1
,
 
`
F
i
x
-
u
p
 
c
o
m
p
l
e
t
e
.
 
A
l
l
 
5
 
i
n
v
a
r
i
a
n
t
s
 
h
o
l
d
.
`
,
 
i
d
,
 
"
D
O
N
E
"
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
r
a
m
e
s
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
B
 
t
r
e
e
 
S
V
G
 
r
e
n
d
e
r
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




f
u
n
c
t
i
o
n
 
R
B
T
r
e
e
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
 
}
:
 
{
 
f
r
a
m
e
:
 
R
B
F
r
a
m
e
 
}
)
 
{


 
 
c
o
n
s
t
 
x
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
 
{
}
;


 
 
c
o
n
s
t
 
y
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
 
{
}
;


 
 
l
e
t
 
c
 
=
 
0
;


 
 
f
u
n
c
t
i
o
n
 
w
a
l
k
(
i
d
:
 
s
t
r
i
n
g
 
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
 
d
e
p
t
h
:
 
n
u
m
b
e
r
)
 
{


 
 
 
 
i
f
 
(
!
i
d
)
 
r
e
t
u
r
n
;


 
 
 
 
w
a
l
k
(
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
s
[
i
d
]
.
l
e
f
t
,
 
d
e
p
t
h
 
+
 
1
)
;


 
 
 
 
x
[
i
d
]
 
=
 
c
+
+
;


 
 
 
 
y
[
i
d
]
 
=
 
d
e
p
t
h
;


 
 
 
 
w
a
l
k
(
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
s
[
i
d
]
.
r
i
g
h
t
,
 
d
e
p
t
h
 
+
 
1
)
;


 
 
}


 
 
w
a
l
k
(
f
r
a
m
e
.
r
o
o
t
I
d
,
 
0
)
;


 
 
c
o
n
s
t
 
n
 
=
 
c
;


 
 
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
2
0
;


 
 
c
o
n
s
t
 
x
S
c
a
l
e
 
=
 
n
 
>
 
1
 
?
 
(
W
 
-
 
6
0
)
 
/
 
(
n
 
-
 
1
)
 
:
 
0
;


 
 
c
o
n
s
t
 
m
a
x
D
 
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
0
,
 
.
.
.
O
b
j
e
c
t
.
v
a
l
u
e
s
(
y
)
)
;


 
 
c
o
n
s
t
 
y
S
c
a
l
e
 
=
 
m
a
x
D
 
>
 
0
 
?
 
(
H
 
-
 
8
0
)
 
/
 
m
a
x
D
 
:
 
0
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
 
O
b
j
e
c
t
.
k
e
y
s
(
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
s
v
g
 
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
w
-
f
u
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
 
h
e
i
g
h
t
:
 
"
a
u
t
o
"
,
 
m
a
x
H
e
i
g
h
t
:
 
H
 
}
}
>


 
 
 
 
 
 
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
 
n
o
d
e
 
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
s
[
i
d
]
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
X
 
=
 
3
0
 
+
 
x
[
i
d
]
 
*
 
x
S
c
a
l
e
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
Y
 
=
 
4
0
 
+
 
y
[
i
d
]
 
*
 
y
S
c
a
l
e
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
h
i
l
d
r
e
n
 
=
 
[
n
o
d
e
.
l
e
f
t
,
 
n
o
d
e
.
r
i
g
h
t
]
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
 
a
s
 
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
e
t
u
r
n
 
c
h
i
l
d
r
e
n
.
m
a
p
(
(
c
i
d
)
 
=
>
 
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
`
$
{
i
d
}
-
$
{
c
i
d
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
x
1
=
{
X
}


 
 
 
 
 
 
 
 
 
 
 
 
y
1
=
{
Y
}


 
 
 
 
 
 
 
 
 
 
 
 
x
2
=
{
3
0
 
+
 
x
[
c
i
d
]
 
*
 
x
S
c
a
l
e
}


 
 
 
 
 
 
 
 
 
 
 
 
y
2
=
{
4
0
 
+
 
y
[
c
i
d
]
 
*
 
y
S
c
a
l
e
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


 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
)
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
 
n
o
d
e
 
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
s
[
i
d
]
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
X
 
=
 
3
0
 
+
 
x
[
i
d
]
 
*
 
x
S
c
a
l
e
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
Y
 
=
 
4
0
 
+
 
y
[
i
d
]
 
*
 
y
S
c
a
l
e
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
A
c
t
i
v
e
 
=
 
i
d
 
=
=
=
 
f
r
a
m
e
.
a
c
t
i
v
e
I
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
X
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
y
=
{
Y
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
=
{
1
7
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
n
o
d
e
.
c
o
l
o
r
 
=
=
=
 
"
R
"
 
?
 
"
#
d
c
2
6
2
6
"
 
:
 
"
#
1
F
2
9
3
7
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
=
{
i
s
A
c
t
i
v
e
 
?
 
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
 
:
 
"
#
F
F
F
F
F
F
"
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
A
c
t
i
v
e
 
?
 
4
 
:
 
2
.
5
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
f
i
l
l
 
0
.
3
s
,
 
s
t
r
o
k
e
 
0
.
2
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
X
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
y
=
{
Y
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
S
i
z
e
=
{
1
3
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
{
7
0
0
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
"
#
F
F
F
F
F
F
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
n
o
d
e
.
k
e
y
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
s
r
c
,
 
s
e
t
S
r
c
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
 
1
5
,
 
2
5
,
 
5
,
 
3
5
"
)
;


 
 
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
 
a
r
r
 
=
 
s
r
c


 
 
 
 
 
 
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
s
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
s
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
n
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
n
)
)
;


 
 
 
 
r
e
t
u
r
n
 
a
r
r
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
 
[
1
0
,
 
2
0
,
 
3
0
,
 
1
5
,
 
2
5
,
 
5
,
 
3
5
]
 
:
 
a
r
r
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
2
)
;


 
 
}
,
 
[
s
r
c
]
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
 
b
u
i
l
d
R
B
F
r
a
m
e
s
(
k
e
y
s
)
,
 
[
k
e
y
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
R
e
d
-
B
l
a
c
k
 
T
r
e
e
,
 
I
n
s
e
r
t
i
o
n
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
K
e
y
s
 
(
i
n
s
e
r
t
 
i
n
 
o
r
d
e
r
)
"


 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
s
r
c
}


 
 
 
 
 
 
 
 
 
 
h
e
l
p
e
r
=
"
U
p
 
t
o
 
1
2
 
k
e
y
s
.
 
W
a
t
c
h
 
t
h
e
 
c
a
s
e
 
t
a
g
s
 
(
C
1
/
C
2
/
C
3
)
 
l
i
g
h
t
 
u
p
 
a
s
 
t
h
e
 
t
r
e
e
 
r
e
b
a
l
a
n
c
e
s
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
l
a
s
s
i
c
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
0
,
 
2
0
,
 
3
0
,
 
1
5
,
 
2
5
,
 
5
,
 
3
5
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
A
s
c
e
n
d
i
n
g
 
(
w
o
r
s
t
-
s
k
e
w
 
t
e
s
t
)
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
,
 
5
,
 
6
,
 
7
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
7
,
 
3
,
 
1
8
,
 
1
0
,
 
2
2
,
 
8
,
 
1
1
,
 
2
6
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
a
n
y
 
r
e
c
o
l
o
r
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
,
 
3
5
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
 
s
e
t
S
r
c
(
v
)
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
P
S
E
U
D
O
_
R
B
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
c
a
s
e
T
a
g
 
?
 
[
"
c
a
s
e
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
[
1
f
r
_
2
4
0
p
x
]
 
g
a
p
-
4
 
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
R
B
T
r
e
e
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
 
/
>
}


 
 
 
 
 
 
 
 
<
C
a
r
d
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
 
m
b
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
5
 
i
n
v
a
r
i
a
n
t
s
 
(
a
l
w
a
y
s
)


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
o
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
e
c
i
m
a
l
 
p
l
-
4
 
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
E
v
e
r
y
 
n
o
d
e
 
i
s
 
R
E
D
 
o
r
 
B
L
A
C
K
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
R
o
o
t
 
i
s
 
B
L
A
C
K
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
A
l
l
 
N
I
L
 
l
e
a
v
e
s
 
a
r
e
 
B
L
A
C
K
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
R
E
D
 
n
o
d
e
s
 
h
a
v
e
 
B
L
A
C
K
 
c
h
i
l
d
r
e
n
 
(
n
o
 
t
w
o
 
r
e
d
s
 
a
d
j
a
c
e
n
t
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
E
v
e
r
y
 
r
o
o
t
-
t
o
-
l
e
a
f
 
p
a
t
h
 
h
a
s
 
t
h
e
 
s
a
m
e
 
n
u
m
b
e
r
 
o
f
 
B
L
A
C
K
 
n
o
d
e
s
 
(
t
h
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
&
l
d
q
u
o
;
b
l
a
c
k
-
h
e
i
g
h
t
&
r
d
q
u
o
;
)
.


 
 
 
 
 
 
 
 
 
 
 
 
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
/
o
l
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
t
-
3
 
p
t
-
3
 
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
d
a
s
h
e
d
 
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
s
t
o
n
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
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
C
u
r
r
e
n
t
 
c
a
s
e
:


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
f
r
a
m
e
?
.
c
a
s
e
T
a
g
 
?
?
 
"
,
"
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
i
t
a
l
i
c
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
H
e
i
g
h
t
 
b
o
u
n
d
:
{
"
 
"
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
t
o
n
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
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
 
&
l
e
;
 
2
&
m
i
d
d
o
t
;
l
o
g
&
#
8
3
2
2
;
(
n
 
+
 
1
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
 
g
a
p
-
4
 
f
l
e
x
-
w
r
a
p
 
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
w
-
3
 
h
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
s
m
 
b
g
-
r
o
s
e
-
6
0
0
 
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
"
 
/
>


 
 
 
 
 
 
 
 
 
 
R
E
D


 
 
 
 
 
 
 
 
<
/
s
p
a
n
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
w
-
3
 
h
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
s
m
 
b
g
-
[
#
1
F
2
9
3
7
]
 
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
"
 
/
>


 
 
 
 
 
 
 
 
 
 
B
L
A
C
K


 
 
 
 
 
 
 
 
<
/
s
p
a
n
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
w
-
3
 
h
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
s
m
 
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
 
}
}


 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
f
o
c
u
s
 
n
o
d
e
 
(
l
i
m
e
 
r
i
n
g
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
m
t
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
W
h
a
t
 
i
s
 
a
 
R
e
d
-
B
l
a
c
k
 
t
r
e
e
?
"
,


 
 
 
 
 
 
b
:
 
"
A
 
s
e
l
f
-
b
a
l
a
n
c
i
n
g
 
B
S
T
 
w
h
e
r
e
 
e
v
e
r
y
 
n
o
d
e
 
i
s
 
c
o
l
o
r
e
d
 
R
E
D
 
o
r
 
B
L
A
C
K
,
 
a
n
d
 
5
 
i
n
v
a
r
i
a
n
t
s
 
f
o
r
c
e
 
t
h
e
 
t
r
e
e
'
s
 
h
e
i
g
h
t
 
t
o
 
s
t
a
y
 
w
i
t
h
i
n
 
2
 
*
 
l
o
g
2
(
n
+
1
)
.
 
I
n
s
e
r
t
,
 
s
e
a
r
c
h
,
 
d
e
l
e
t
e
:
 
a
l
l
 
O
(
l
o
g
 
n
)
 
w
o
r
s
t
 
c
a
s
e
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
t
:
 
"
W
h
y
 
t
w
o
 
c
o
l
o
r
s
 
a
n
d
 
n
o
t
 
h
e
i
g
h
t
s
?
"
,


 
 
 
 
 
 
b
:
 
"
A
V
L
 
s
t
o
r
e
s
 
h
e
i
g
h
t
 
p
e
r
 
n
o
d
e
 
a
n
d
 
r
e
b
a
l
a
n
c
e
s
 
a
g
g
r
e
s
s
i
v
e
l
y
 
(
h
e
i
g
h
t
 
d
i
f
f
e
r
e
n
c
e
 
<
=
 
1
)
.
 
R
B
 
s
t
o
r
e
s
 
1
 
b
i
t
 
(
c
o
l
o
r
)
 
a
n
d
 
t
o
l
e
r
a
t
e
s
 
u
p
 
t
o
 
a
 
2
x
 
i
m
b
a
l
a
n
c
e
,
 
l
o
o
s
e
r
,
 
b
u
t
 
c
h
e
a
p
e
r
 
t
o
 
m
a
i
n
t
a
i
n
.
 
R
B
 
d
o
e
s
 
f
e
w
e
r
 
r
o
t
a
t
i
o
n
s
 
o
n
 
i
n
s
e
r
t
/
d
e
l
e
t
e
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
t
:
 
"
R
B
 
v
s
 
A
V
L
,
 
w
h
e
n
 
e
a
c
h
 
w
i
n
s
"
,


 
 
 
 
 
 
b
:
 
"
R
e
a
d
-
h
e
a
v
y
 
w
o
r
k
l
o
a
d
s
 
-
>
 
A
V
L
 
(
t
i
g
h
t
e
r
 
b
a
l
a
n
c
e
,
 
f
a
s
t
e
r
 
l
o
o
k
u
p
)
.
 
W
r
i
t
e
-
h
e
a
v
y
 
/
 
m
i
x
e
d
 
-
>
 
R
B
 
(
f
e
w
e
r
 
r
o
t
a
t
i
o
n
s
 
o
n
 
u
p
d
a
t
e
)
.
 
M
o
s
t
 
l
a
n
g
u
a
g
e
 
s
t
d
l
i
b
s
 
c
h
o
o
s
e
 
R
B
:
 
s
t
d
:
:
m
a
p
 
(
C
+
+
)
,
 
T
r
e
e
M
a
p
 
(
J
a
v
a
)
,
 
L
i
n
u
x
 
k
e
r
n
e
l
 
r
b
_
n
o
d
e
 
(
C
F
S
 
s
c
h
e
d
u
l
e
r
,
 
E
P
O
L
L
,
 
v
i
r
t
u
a
l
 
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


 
 
 
 
{


 
 
 
 
 
 
t
:
 
"
I
n
s
e
r
t
i
o
n
 
=
 
B
S
T
 
i
n
s
e
r
t
 
+
 
f
i
x
-
u
p
"
,


 
 
 
 
 
 
b
:
 
"
N
e
w
 
n
o
d
e
 
c
o
l
o
r
e
d
 
R
E
D
;
 
s
t
a
n
d
a
r
d
 
B
S
T
 
d
e
s
c
e
n
t
.
 
T
h
e
 
o
n
l
y
 
i
n
v
a
r
i
a
n
t
 
a
 
R
E
D
 
i
n
s
e
r
t
 
c
a
n
 
v
i
o
l
a
t
e
 
i
s
 
i
n
v
a
r
i
a
n
t
 
4
 
(
n
o
 
t
w
o
 
r
e
d
s
 
a
d
j
a
c
e
n
t
)
.
 
T
h
e
 
f
i
x
-
u
p
 
w
a
l
k
s
 
u
p
 
t
h
e
 
t
r
e
e
 
h
a
n
d
l
i
n
g
 
3
 
c
a
s
e
s
 
u
n
t
i
l
 
i
n
v
a
r
i
a
n
t
s
 
a
r
e
 
r
e
s
t
o
r
e
d
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
t
:
 
"
T
h
e
 
3
 
f
i
x
-
u
p
 
c
a
s
e
s
"
,


 
 
 
 
 
 
b
:
 
"
C
a
s
e
 
1
:
 
u
n
c
l
e
 
i
s
 
R
E
D
,
 
r
e
c
o
l
o
r
 
p
a
r
e
n
t
+
u
n
c
l
e
 
B
L
A
C
K
,
 
g
r
a
n
d
p
a
r
e
n
t
 
R
E
D
,
 
c
o
n
t
i
n
u
e
 
a
t
 
g
r
a
n
d
p
a
r
e
n
t
.
 
C
a
s
e
 
2
:
 
z
i
g
-
z
a
g
,
 
r
o
t
a
t
e
 
p
a
r
e
n
t
 
t
o
 
s
t
r
a
i
g
h
t
e
n
.
 
C
a
s
e
 
3
:
 
l
i
n
e
,
 
r
o
t
a
t
e
 
g
r
a
n
d
p
a
r
e
n
t
 
+
 
s
w
a
p
 
c
o
l
o
r
s
.
 
C
a
s
e
 
1
 
i
s
 
r
e
c
u
r
s
i
v
e
 
(
c
l
i
m
b
s
)
;
 
C
a
s
e
s
 
2
/
3
 
t
e
r
m
i
n
a
t
e
 
a
f
t
e
r
 
a
t
 
m
o
s
t
 
o
n
e
 
r
o
t
a
t
i
o
n
 
p
a
i
r
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
t
:
 
"
P
r
o
d
u
c
t
i
o
n
 
c
o
d
e
 
u
s
e
s
 
R
B
,
 
e
v
e
n
 
w
h
e
n
 
A
V
L
 
w
o
u
l
d
 
b
e
 
f
i
n
e
"
,


 
 
 
 
 
 
b
:
 
"
R
B
'
s
 
d
o
m
i
n
a
n
c
e
 
c
o
m
e
s
 
f
r
o
m
:
 
s
i
m
p
l
e
r
 
d
e
l
e
t
e
 
(
5
 
c
a
s
e
s
 
v
s
 
A
V
L
'
s
 
d
e
e
p
e
r
 
r
e
b
a
l
a
n
c
i
n
g
)
,
 
1
 
c
o
l
o
r
 
b
i
t
 
(
v
s
 
f
u
l
l
 
h
e
i
g
h
t
)
,
 
a
n
d
 
h
i
s
t
o
r
i
c
a
l
 
i
n
e
r
t
i
a
 
(
S
e
d
g
e
w
i
c
k
'
s
 
L
e
f
t
-
L
e
a
n
i
n
g
 
R
B
 
s
i
m
p
l
i
f
i
e
d
 
t
h
e
 
i
m
p
l
e
m
e
n
t
a
t
i
o
n
 
i
n
 
t
h
e
 
2
0
0
0
s
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
T
h
e
 
p
r
a
g
m
a
t
i
s
t
&
r
s
q
u
o
;
s
 
b
a
l
a
n
c
e
d
 
B
S
T
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
V
L
 
i
s
 
a
 
p
e
r
f
e
c
t
i
o
n
i
s
t
,
 
e
v
e
r
y
 
i
m
b
a
l
a
n
c
e
 
t
r
i
g
g
e
r
s
 
a
n
 
i
m
m
e
d
i
a
t
e
 
r
o
t
a
t
i
o
n
.
 
R
B
 
i
s
 
a
 
p
r
a
g
m
a
t
i
s
t
,


 
 
 
 
 
 
 
 
 
 
i
t
 
a
l
l
o
w
s
 
m
i
l
d
 
i
m
b
a
l
a
n
c
e
 
(
u
p
 
t
o
 
2
x
)
 
b
u
t
 
u
s
e
s
 
c
h
e
a
p
 
r
e
c
o
l
o
r
i
n
g
 
b
e
f
o
r
e
 
f
a
l
l
i
n
g
 
b
a
c
k
 
t
o


 
 
 
 
 
 
 
 
 
 
r
o
t
a
t
i
o
n
.
 
P
r
o
d
u
c
t
i
o
n
 
c
o
d
e
 
c
h
o
s
e
 
p
r
a
g
m
a
t
i
s
m
:
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
<
c
o
d
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
x
s
 
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
8
0
0
 
p
x
-
1
 
r
o
u
n
d
e
d
"
>


 
 
 
 
 
 
 
 
 
 
 
 
s
t
d
:
:
m
a
p


 
 
 
 
 
 
 
 
 
 
<
/
c
o
d
e
>


 
 
 
 
 
 
 
 
 
 
,
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
<
c
o
d
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
x
s
 
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
8
0
0
 
p
x
-
1
 
r
o
u
n
d
e
d
"
>


 
 
 
 
 
 
 
 
 
 
 
 
T
r
e
e
M
a
p


 
 
 
 
 
 
 
 
 
 
<
/
c
o
d
e
>


 
 
 
 
 
 
 
 
 
 
,
 
a
n
d
 
t
h
e
 
L
i
n
u
x
 
s
c
h
e
d
u
l
e
r
 
a
l
l
 
r
u
n
 
o
n
 
R
B
-
t
r
e
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
{
s
.
t
}
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
{
s
.
b
}
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
s
e
r
t
 
1
,
2
,
3
 
i
n
 
o
r
d
e
r
 
i
n
t
o
 
a
n
 
e
m
p
t
y
 
R
B
-
t
r
e
e
.
 
W
h
a
t
 
i
s
 
t
h
e
 
r
o
o
t
 
k
e
y
 
a
f
t
e
r
 
a
l
l
 
3
 
i
n
s
e
r
t
s
?
"
,


 
 
 
 
 
 
a
:
 
"
2
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
:
 
"
H
o
w
 
m
a
n
y
 
B
L
A
C
K
 
n
o
d
e
s
 
a
r
e
 
o
n
 
e
v
e
r
y
 
r
o
o
t
-
t
o
-
N
I
L
 
p
a
t
h
 
i
n
 
a
 
7
-
k
e
y
 
f
u
l
l
 
R
B
-
t
r
e
e
 
(
p
e
r
f
e
c
t
l
y
 
b
a
l
a
n
c
e
d
,
 
a
l
l
 
i
n
t
e
r
n
a
l
 
n
o
d
e
s
 
B
L
A
C
K
)
?
"
,


 
 
 
 
 
 
a
:
 
"
3
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
:
 
"
I
f
 
a
 
R
E
D
 
n
o
d
e
 
h
a
s
 
2
 
c
h
i
l
d
r
e
n
,
 
w
h
a
t
 
c
o
l
o
r
 
m
u
s
t
 
t
h
e
y
 
b
e
?
 
(
R
 
o
r
 
B
)
"
,


 
 
 
 
 
 
a
:
 
"
B
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
:
 
"
T
r
u
e
/
F
a
l
s
e
:
 
I
n
s
e
r
t
i
n
g
 
a
n
 
a
s
c
e
n
d
i
n
g
 
s
e
q
u
e
n
c
e
 
i
n
t
o
 
R
B
 
m
a
k
e
s
 
i
t
 
l
i
n
e
a
r
 
(
s
k
e
w
e
d
)
 
l
i
k
e
 
p
l
a
i
n
 
B
S
T
.
"
,


 
 
 
 
 
 
a
:
 
"
F
a
l
s
e
"
,


 
 
 
 
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
,
 
s
e
t
G
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
,
 
s
e
t
S
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
T
r
a
c
e
 
m
e
n
t
a
l
l
y
;
 
v
e
r
i
f
y
 
i
n
 
t
h
e
 
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
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
o
r
r
e
c
t
 
=
 
(
g
[
i
]
 
?
?
 
"
"
)
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
 
=
=
=
 
p
.
a
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
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
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
1
0
0
 
m
b
-
3
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
r
-
2
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
p
.
q
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
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
x
s
 
w
-
3
6
 
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
:
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
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
r
r
e
c
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
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
4
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
o
r
r
e
c
t
 
?
 
`
C
o
r
r
e
c
t
,
 
$
{
p
.
a
}
`
 
:
 
`
A
n
s
w
e
r
:
 
$
{
p
.
a
}
`
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
 
h
e
i
g
h
t
 
&
l
e
;
 
2
&
m
i
d
d
o
t
;
l
o
g
&
#
8
3
2
2
;
(
n
 
+
 
1
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


 
 
 
 
 
 
 
 
 
 
L
e
t
 
<
e
m
>
b
h
(
x
)
<
/
e
m
>
 
=
 
b
l
a
c
k
-
h
e
i
g
h
t
 
o
f
 
n
o
d
e
 
x
 
(
c
o
u
n
t
 
o
f
 
B
L
A
C
K
 
o
n
 
a
n
y
 
r
o
o
t
-
t
o
-
N
I
L
 
p
a
t
h


 
 
 
 
 
 
 
 
 
 
t
h
r
o
u
g
h
 
x
)
.
 
B
y
 
i
n
v
a
r
i
a
n
t
 
5
 
i
t
 
i
s
 
w
e
l
l
-
d
e
f
i
n
e
d
.
 
B
y
 
i
n
v
a
r
i
a
n
t
 
4
 
(
n
o
 
a
d
j
a
c
e
n
t
 
r
e
d
s
)
,
 
a
t
 
m
o
s
t


 
 
 
 
 
 
 
 
 
 
h
a
l
f
 
t
h
e
 
n
o
d
e
s
 
o
n
 
a
n
y
 
p
a
t
h
 
a
r
e
 
R
E
D
.
 
S
o
 
t
o
t
a
l
 
h
e
i
g
h
t
 
&
l
e
;
 
2
&
m
i
d
d
o
t
;
b
h
(
r
o
o
t
)
.
 
I
t
 
c
a
n
 
a
l
s
o
 
b
e


 
 
 
 
 
 
 
 
 
 
s
h
o
w
n
 
t
h
a
t
 
t
h
e
 
s
u
b
t
r
e
e
 
a
t
 
a
 
n
o
d
e
 
w
i
t
h
 
b
l
a
c
k
-
h
e
i
g
h
t
 
b
h
 
c
o
n
t
a
i
n
s
 
a
t
 
l
e
a
s
t
 
2
^
b
h
 
-
 
1
 
i
n
t
e
r
n
a
l


 
 
 
 
 
 
 
 
 
 
n
o
d
e
s
,
 
w
h
i
c
h
 
g
i
v
e
s
 
b
h
(
r
o
o
t
)
 
&
l
e
;
 
l
o
g
&
#
8
3
2
2
;
(
n
 
+
 
1
)
.
 
C
o
m
b
i
n
i
n
g
:
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
<
s
t
r
o
n
g
 
c
l
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
>


 
 
 
 
 
 
 
 
 
 
 
 
h
e
i
g
h
t
 
&
l
e
;
 
2
&
m
i
d
d
o
t
;
l
o
g
&
#
8
3
2
2
;
(
n
 
+
 
1
)


 
 
 
 
 
 
 
 
 
 
<
/
s
t
r
o
n
g
>


 
 
 
 
 
 
 
 
 
 
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
 
p
a
d
d
e
d
=
{
f
a
l
s
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
-
5
 
p
b
-
3
"
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
B
 
v
s
 
A
V
L
,
 
h
e
a
d
-
t
o
-
h
e
a
d
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
 
c
l
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
/
5
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
r
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
[
"
P
r
o
p
e
r
t
y
"
,
 
"
A
V
L
"
,
 
"
R
e
d
-
B
l
a
c
k
"
]
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
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
h


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
h
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
l
e
f
t
 
p
x
-
4
 
p
y
-
3
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
h
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
h
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
[


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
[
"
H
e
i
g
h
t
 
b
o
u
n
d
"
,
 
"
1
.
4
4
 
*
 
l
o
g
2
(
n
+
2
)
"
,
 
"
2
 
*
 
l
o
g
2
(
n
+
1
)
"
]
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
[
"
P
e
r
-
n
o
d
e
 
o
v
e
r
h
e
a
d
"
,
 
"
h
e
i
g
h
t
 
(
8
-
3
2
 
b
i
t
s
)
"
,
 
"
c
o
l
o
r
 
(
1
 
b
i
t
)
"
]
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
[
"
R
o
t
a
t
i
o
n
s
 
p
e
r
 
i
n
s
e
r
t
"
,
 
"
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
"
,
 
"
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
"
]
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
[
"
R
o
t
a
t
i
o
n
s
 
p
e
r
 
d
e
l
e
t
e
"
,
 
"
U
p
 
t
o
 
l
o
g
 
n
"
,
 
"
a
t
 
m
o
s
t
 
3
"
]
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
[
"
L
o
o
k
u
p
 
s
p
e
e
d
"
,
 
"
F
a
s
t
e
r
 
(
t
i
g
h
t
e
r
)
"
,
 
"
S
l
i
g
h
t
l
y
 
s
l
o
w
e
r
"
]
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
[
"
B
e
s
t
 
f
o
r
"
,
 
"
R
e
a
d
-
h
e
a
v
y
 
/
 
d
a
t
a
b
a
s
e
s
"
,
 
"
M
i
x
e
d
 
/
 
l
a
n
g
u
a
g
e
 
s
t
d
l
i
b
s
"
]
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
[


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
"
U
s
e
d
 
b
y
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
"
S
o
m
e
 
D
B
 
i
n
d
e
x
e
s
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
"
s
t
d
:
:
m
a
p
,
 
T
r
e
e
M
a
p
,
 
L
i
n
u
x
 
C
F
S
,
 
J
a
v
a
 
H
a
s
h
M
a
p
 
(
p
o
s
t
-
t
r
e
e
i
f
y
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
]
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
]
.
m
a
p
(
(
r
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
{
i
 
=
=
=
 
0
 
?
 
"
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
t
 
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
w
h
i
t
e
/
5
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
4
 
p
y
-
2
 
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
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
[
0
]
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
4
 
p
y
-
2
 
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
"
>
{
r
[
1
]
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
4
 
p
y
-
2
 
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
"
>
{
r
[
2
]
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
 
y
o
u
 
a
c
t
u
a
l
l
y
 
m
e
e
t
 
R
B
-
t
r
e
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


 
 
 
 
 
 
 
 
 
 
 
 
<
s
t
r
o
n
g
 
c
l
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
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
C
+
+
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
c
o
d
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
x
s
 
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
8
0
0
 
p
x
-
1
 
r
o
u
n
d
e
d
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
d
:
:
m
a
p
 
/
 
s
t
d
:
:
s
e
t
 
/
 
s
t
d
:
:
m
u
l
t
i
m
a
p


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
c
o
d
e
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
t
r
o
n
g
>
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
,
 
R
B
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


 
 
 
 
 
 
 
 
 
 
 
 
<
s
t
r
o
n
g
 
c
l
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
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
J
a
v
a
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
c
o
d
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
x
s
 
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
8
0
0
 
p
x
-
1
 
r
o
u
n
d
e
d
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
T
r
e
e
M
a
p
 
/
 
T
r
e
e
S
e
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
c
o
d
e
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
t
r
o
n
g
>
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
,
 
R
B
.
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
<
c
o
d
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
x
s
 
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
8
0
0
 
p
x
-
1
 
r
o
u
n
d
e
d
"
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
c
o
d
e
>
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
t
r
e
e
i
f
i
e
s
 
l
o
n
g
 
c
h
a
i
n
s
 
i
n
t
o
 
R
B
-
t
r
e
e
s
 
o
n
c
e
 
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
 
&
g
e
;
 
8
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


 
 
 
 
 
 
 
 
 
 
 
 
<
s
t
r
o
n
g
 
c
l
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
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
L
i
n
u
x
 
k
e
r
n
e
l
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
c
o
d
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
x
s
 
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
8
0
0
 
p
x
-
1
 
r
o
u
n
d
e
d
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
b
_
n
o
d
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
s
t
r
o
n
g
>
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
,
 
C
F
S
 
p
r
o
c
e
s
s
 
s
c
h
e
d
u
l
e
r
,
 
v
i
r
t
u
a
l
-
m
e
m
o
r
y
 
a
r
e
a
 
l
o
o
k
u
p
,
 
E
P
O
L
L
 
r
e
a
d
y
-
l
i
s
t
,
 
E
X
T
4
 
d
i
r
e
c
t
o
r
y


 
 
 
 
 
 
 
 
 
 
 
 
i
n
d
e
x
i
n
g
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


 
 
 
 
 
 
 
 
 
 
 
 
<
s
t
r
o
n
g
 
c
l
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
>
N
g
i
n
x
<
/
s
t
r
o
n
g
>
 
u
s
e
s
 
R
B
-
t
r
e
e
s
 
f
o
r


 
 
 
 
 
 
 
 
 
 
 
 
t
i
m
e
r
 
q
u
e
u
e
s
 
a
n
d
 
u
p
s
t
r
e
a
m
 
l
o
o
k
u
p
s
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
L
e
f
t
-
L
e
a
n
i
n
g
 
R
e
d
-
B
l
a
c
k
 
t
r
e
e
s
 
(
S
e
d
g
e
w
i
c
k
,
 
2
0
0
8
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


 
 
 
 
 
 
 
 
 
 
A
 
s
i
m
p
l
i
f
i
e
d
 
R
B
 
v
a
r
i
a
n
t
 
w
h
e
r
e
 
t
h
e
 
o
n
l
y
 
R
E
D
 
l
i
n
k
s
 
a
l
l
o
w
e
d
 
a
r
e
 
L
E
F
T
 
l
i
n
k
s
.
 
C
u
t
s
 
t
h
e


 
 
 
 
 
 
 
 
 
 
i
m
p
l
e
m
e
n
t
a
t
i
o
n
 
r
o
u
g
h
l
y
 
i
n
 
h
a
l
f
.
 
S
e
d
g
e
w
i
c
k
&
r
s
q
u
o
;
s
 
t
e
a
c
h
i
n
g
 
c
o
d
e
 
i
s
 
u
n
d
e
r
 
2
0
0
 
l
i
n
e
s
 
f
o
r


 
 
 
 
 
 
 
 
 
 
f
u
l
l
 
i
n
s
e
r
t
/
d
e
l
e
t
e
.
 
U
s
e
d
 
i
n
 
s
o
m
e
 
J
a
v
a
 
t
e
a
c
h
i
n
g
 
l
i
b
r
a
r
i
e
s
 
a
n
d
 
i
n
 
P
r
i
n
c
e
t
o
n
&
r
s
q
u
o
;
s


 
 
 
 
 
 
 
 
 
 
t
e
x
t
b
o
o
k
s
.
 
S
a
m
e
 
O
(
l
o
g
 
n
)
 
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
,
 
m
a
r
g
i
n
a
l
l
y
 
m
o
r
e
 
r
o
t
a
t
i
o
n
s
 
i
n
 
p
r
a
c
t
i
c
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
s
s
o
n
 
e
x
p
o
r
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
3
_
R
e
d
B
l
a
c
k
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
,


 
 
 
 
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
,


 
 
 
 
}
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
 
c
o
l
o
r
 
m
u
s
t
 
a
 
n
e
w
l
y
 
i
n
s
e
r
t
e
d
 
n
o
d
e
 
b
e
 
(
b
e
f
o
r
e
 
f
i
x
-
u
p
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
B
L
A
C
K
"
,
 
"
R
E
D
"
,
 
"
E
i
t
h
e
r
,
 
d
e
p
e
n
d
i
n
g
 
o
n
 
p
a
r
e
n
t
"
,
 
"
B
L
U
E
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
n
s
e
r
t
i
n
g
 
R
E
D
 
c
a
n
 
o
n
l
y
 
v
i
o
l
a
t
e
 
i
n
v
a
r
i
a
n
t
 
4
 
(
n
o
 
t
w
o
 
r
e
d
s
)
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
 
B
L
A
C
K
 
w
o
u
l
d
 
v
i
o
l
a
t
e
 
i
n
v
a
r
i
a
n
t
 
5
 
(
e
q
u
a
l
 
b
l
a
c
k
-
h
e
i
g
h
t
)
 
a
l
m
o
s
t
 
a
l
w
a
y
s
,
 
m
u
c
h
 
h
a
r
d
e
r
 
t
o
 
f
i
x
.
 
S
o
 
n
e
w
 
n
o
d
e
s
 
a
r
e
 
R
E
D
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
f
t
e
r
 
i
n
s
e
r
t
 
f
i
x
-
u
p
,
 
w
h
a
t
 
c
o
l
o
r
 
i
s
 
t
h
e
 
r
o
o
t
 
a
l
w
a
y
s
 
s
e
t
 
t
o
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
R
E
D
"
,
 
"
B
L
A
C
K
"
,
 
"
S
a
m
e
 
a
s
 
p
a
r
e
n
t
"
,
 
"
S
a
m
e
 
a
s
 
n
e
w
 
n
o
d
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
n
v
a
r
i
a
n
t
 
2
 
r
e
q
u
i
r
e
s
 
t
h
e
 
r
o
o
t
 
t
o
 
b
e
 
B
L
A
C
K
.
 
T
h
e
 
f
i
x
-
u
p
'
s
 
l
a
s
t
 
s
t
e
p
 
u
n
c
o
n
d
i
t
i
o
n
a
l
l
y
 
r
e
c
o
l
o
r
s
 
t
h
e
 
r
o
o
t
 
B
L
A
C
K
,
 
w
h
i
c
h
 
n
e
v
e
r
 
v
i
o
l
a
t
e
s
 
a
n
y
 
o
t
h
e
r
 
i
n
v
a
r
i
a
n
t
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
M
a
x
i
m
u
m
 
h
e
i
g
h
t
 
o
f
 
a
 
R
e
d
-
B
l
a
c
k
 
t
r
e
e
 
w
i
t
h
 
n
 
i
n
t
e
r
n
a
l
 
n
o
d
e
s
:
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
l
o
g
2
 
n
"
,
 
"
1
.
4
4
 
*
 
l
o
g
2
(
n
+
2
)
"
,
 
"
2
 
*
 
l
o
g
2
(
n
+
1
)
"
,
 
"
n
 
/
 
2
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
B
y
 
t
h
e
 
b
l
a
c
k
-
h
e
i
g
h
t
 
a
r
g
u
m
e
n
t
:
 
b
h
(
r
o
o
t
)
 
<
=
 
l
o
g
2
(
n
+
1
)
,
 
a
n
d
 
a
t
 
m
o
s
t
 
h
a
l
f
 
t
h
e
 
n
o
d
e
s
 
o
n
 
a
 
p
a
t
h
 
c
a
n
 
b
e
 
r
e
d
,
 
g
i
v
i
n
g
 
h
e
i
g
h
t
 
<
=
 
2
 
*
 
l
o
g
2
(
n
+
1
)
.
 
S
l
i
g
h
t
l
y
 
l
o
o
s
e
r
 
t
h
a
n
 
A
V
L
'
s
 
1
.
4
4
 
*
 
l
o
g
2
(
n
+
2
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
R
B
-
t
r
e
e
s
 
b
e
a
t
 
A
V
L
 
o
n
 
w
h
i
c
h
 
w
o
r
k
l
o
a
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
R
e
a
d
-
h
e
a
v
y
 
l
o
o
k
u
p
s
 
(
b
e
c
a
u
s
e
 
R
B
 
h
a
s
 
t
i
g
h
t
e
r
 
b
a
l
a
n
c
e
)
"
,


 
 
 
 
 
 
 
 
"
M
i
x
e
d
 
i
n
s
e
r
t
/
d
e
l
e
t
e
-
h
e
a
v
y
 
w
o
r
k
l
o
a
d
s
 
(
b
e
c
a
u
s
e
 
R
B
 
d
o
e
s
 
f
e
w
e
r
 
r
o
t
a
t
i
o
n
s
 
o
n
 
u
p
d
a
t
e
,
 
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
 
f
e
w
e
r
 
o
n
 
d
e
l
e
t
e
)
"
,


 
 
 
 
 
 
 
 
"
W
o
r
s
t
-
c
a
s
e
 
m
e
m
o
r
y
 
(
b
e
c
a
u
s
e
 
R
B
 
h
a
s
 
n
o
 
p
e
r
-
n
o
d
e
 
b
o
o
k
k
e
e
p
i
n
g
)
"
,


 
 
 
 
 
 
 
 
"
A
l
l
 
o
f
 
t
h
e
 
a
b
o
v
e
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
A
V
L
 
h
a
s
 
s
l
i
g
h
t
l
y
 
t
i
g
h
t
e
r
 
b
a
l
a
n
c
e
 
a
n
d
 
f
a
s
t
e
r
 
l
o
o
k
u
p
s
.
 
R
B
 
d
o
e
s
 
f
e
w
e
r
 
r
o
t
a
t
i
o
n
s
 
p
e
r
 
i
n
s
e
r
t
/
d
e
l
e
t
e
 
(
d
e
l
e
t
e
 
b
o
u
n
d
e
d
 
b
y
 
3
 
r
o
t
a
t
i
o
n
s
,
 
v
s
 
A
V
L
'
s
 
O
(
l
o
g
 
n
)
)
,
 
t
h
a
t
'
s
 
w
h
y
 
l
a
n
g
u
a
g
e
 
s
t
d
l
i
b
s
 
a
n
d
 
t
h
e
 
L
i
n
u
x
 
k
e
r
n
e
l
 
c
h
o
o
s
e
 
R
B
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
 
c
o
n
v
e
r
t
s
 
a
 
c
h
a
i
n
e
d
 
b
u
c
k
e
t
 
t
o
 
a
 
t
r
e
e
 
o
n
c
e
 
t
h
e
 
c
h
a
i
n
 
r
e
a
c
h
e
s
 
l
e
n
g
t
h
 
8
.
 
W
h
a
t
 
k
i
n
d
 
o
f
 
t
r
e
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
A
V
L
"
,
 
"
S
p
l
a
y
 
t
r
e
e
"
,
 
"
R
e
d
-
B
l
a
c
k
"
,
 
"
S
k
i
p
 
l
i
s
t
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
J
a
v
a
 
p
i
c
k
s
 
R
B
 
f
o
r
 
t
h
e
 
s
a
m
e
 
r
e
a
s
o
n
 
m
o
s
t
 
s
t
d
l
i
b
s
 
d
o
:
 
s
i
m
p
l
e
r
 
d
e
l
e
t
e
 
+
 
l
o
w
e
r
 
r
o
t
a
t
i
o
n
 
o
v
e
r
h
e
a
d
.
 
T
h
e
 
t
r
e
e
i
f
i
e
d
 
H
a
s
h
M
a
p
 
c
a
p
s
 
w
o
r
s
t
-
c
a
s
e
 
b
u
c
k
e
t
 
l
o
o
k
u
p
 
a
t
 
O
(
l
o
g
 
k
)
,
 
u
s
e
f
u
l
 
a
g
a
i
n
s
t
 
a
d
v
e
r
s
a
r
i
a
l
 
h
a
s
h
-
c
o
l
l
i
s
i
o
n
 
a
t
t
a
c
k
s
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
R
e
d
-
B
l
a
c
k
 
T
r
e
e
s
"


 
 
 
 
 
 
l
e
v
e
l
=
{
3
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
 
t
h
e
 
p
r
o
d
u
c
t
i
o
n
 
b
a
l
a
n
c
e
d
 
B
S
T
.
 
s
t
d
:
:
m
a
p
,
 
T
r
e
e
M
a
p
,
 
L
i
n
u
x
 
k
e
r
n
e
l
,
 
a
l
l
 
R
B
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
H
e
a
p
s
 
&
 
P
r
i
o
r
i
t
y
 
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


