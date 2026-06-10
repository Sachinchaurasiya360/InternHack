
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
 
L
i
n
k
,
 
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


 
 
C
h
e
v
r
o
n
L
e
f
t
,


 
 
C
h
e
v
r
o
n
R
i
g
h
t
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


 
 
C
i
r
c
l
e
,


 
 
C
o
p
y
,


 
 
C
h
e
c
k
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


 
 
M
e
s
s
a
g
e
C
i
r
c
l
e
,


 
 
A
l
e
r
t
T
r
i
a
n
g
l
e
,


 
 
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
n
k
2
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


 
 
C
h
e
v
r
o
n
D
o
w
n
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
s
e
o
.
u
t
i
l
s
"
;


i
m
p
o
r
t
 
g
u
i
d
e
D
a
t
a
 
f
r
o
m
 
"
.
/
d
a
t
a
/
g
s
o
c
-
p
r
o
p
o
s
a
l
-
g
u
i
d
e
.
j
s
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
 
n
o
t
i
f
y
L
e
a
r
n
i
n
g
P
a
t
h
P
r
o
g
r
e
s
s
C
h
a
n
g
e
d
 
}
 
f
r
o
m
 
"
.
/
l
e
a
r
n
i
n
g
-
p
a
t
h
s
.
d
a
t
a
"
;




/
/
 
─
─
─
 
T
y
p
e
s
 
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
─
─
─
─
─


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
e
s
o
u
r
c
e
 
{
 
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
;
 
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
;
 
t
y
p
e
:
 
s
t
r
i
n
g
 
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
 
S
t
e
p
 
{


 
 
s
t
e
p
:
 
n
u
m
b
e
r
;


 
 
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
;


 
 
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
:
 
s
t
r
i
n
g
;


 
 
e
s
t
i
m
a
t
e
d
M
i
n
u
t
e
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


 
 
l
e
v
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


 
 
m
e
n
t
o
r
_
g
u
i
d
a
n
c
e
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
t
a
i
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


 
 
t
i
p
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


 
 
m
i
s
t
a
k
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


 
 
r
e
s
o
u
r
c
e
s
:
 
R
e
s
o
u
r
c
e
[
]
;


}




c
o
n
s
t
 
S
T
E
P
S
:
 
S
t
e
p
[
]
 
=
 
g
u
i
d
e
D
a
t
a
.
g
s
o
c
P
r
o
p
o
s
a
l
R
o
a
d
m
a
p
 
a
s
 
S
t
e
p
[
]
;


c
o
n
s
t
 
P
R
O
P
O
S
A
L
_
T
E
M
P
L
A
T
E
 
=
 
g
u
i
d
e
D
a
t
a
.
p
r
o
p
o
s
a
l
T
e
m
p
l
a
t
e
;


c
o
n
s
t
 
S
T
O
R
A
G
E
_
K
E
Y
 
=
 
"
g
s
o
c
-
p
r
o
p
o
s
a
l
-
r
o
a
d
m
a
p
-
c
o
m
p
l
e
t
e
d
"
;




/
/
 
─
─
─
 
H
e
l
p
e
r
s
 
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
─
─
─


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
C
o
m
p
l
e
t
e
d
(
)
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
 
s
t
o
r
e
d
 
=
 
l
o
c
a
l
S
t
o
r
a
g
e
.
g
e
t
I
t
e
m
(
S
T
O
R
A
G
E
_
K
E
Y
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
o
r
e
d
 
?
 
n
e
w
 
S
e
t
(
J
S
O
N
.
p
a
r
s
e
(
s
t
o
r
e
d
)
)
 
:
 
n
e
w
 
S
e
t
(
)
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
 
n
e
w
 
S
e
t
(
)
;


 
 
}


}




/
/
 
─
─
─
 
C
o
p
y
 
B
u
t
t
o
n
 
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


f
u
n
c
t
i
o
n
 
C
o
p
y
B
u
t
t
o
n
(
{
 
t
e
x
t
,
 
l
a
b
e
l
 
=
 
"
C
o
p
y
"
 
}
:
 
{
 
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
;
 
l
a
b
e
l
?
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


 
 
c
o
n
s
t
 
[
c
o
p
i
e
d
,
 
s
e
t
C
o
p
i
e
d
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
 
c
o
p
y
 
=
 
(
)
 
=
>
 
{


 
 
 
 
n
a
v
i
g
a
t
o
r
.
c
l
i
p
b
o
a
r
d
.
w
r
i
t
e
T
e
x
t
(
t
e
x
t
)
;


 
 
 
 
s
e
t
C
o
p
i
e
d
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
T
i
m
e
o
u
t
(
(
)
 
=
>
 
s
e
t
C
o
p
i
e
d
(
f
a
l
s
e
)
,
 
2
0
0
0
)
;


 
 
}
;


 
 
r
e
t
u
r
n
 
(


 
 
 
 
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
g
h
o
s
t
"


 
 
 
 
 
 
s
i
z
e
=
"
s
m
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
c
o
p
y
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
"


 
 
 
 
>


 
 
 
 
 
 
{
c
o
p
i
e
d
 
?
 
<
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
0
"
 
/
>
 
:
 
<
C
o
p
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
}


 
 
 
 
 
 
{
c
o
p
i
e
d
 
?
 
"
C
o
p
i
e
d
!
"
 
:
 
l
a
b
e
l
}


 
 
 
 
<
/
B
u
t
t
o
n
>


 
 
)
;


}




/
/
 
─
─
─
 
P
a
g
e
 
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
─
─
─
─
─
─


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
 
G
S
o
C
P
r
o
p
o
s
a
l
S
t
e
p
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
 
s
e
c
t
i
o
n
S
l
u
g
 
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
 
s
e
c
t
i
o
n
S
l
u
g
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
 
s
t
e
p
I
n
d
e
x
 
=
 
S
T
E
P
S
.
f
i
n
d
I
n
d
e
x
(
(
s
)
 
=
>
 
s
.
i
d
 
=
=
=
 
s
e
c
t
i
o
n
S
l
u
g
)
;


 
 
c
o
n
s
t
 
s
t
e
p
 
=
 
S
T
E
P
S
[
s
t
e
p
I
n
d
e
x
]
;




 
 
c
o
n
s
t
 
[
c
o
m
p
l
e
t
e
d
,
 
s
e
t
C
o
m
p
l
e
t
e
d
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
>
(
g
e
t
C
o
m
p
l
e
t
e
d
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
T
e
m
p
l
a
t
e
,
 
s
e
t
S
h
o
w
T
e
m
p
l
a
t
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
 
t
o
g
g
l
e
C
o
m
p
l
e
t
e
 
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
)
 
=
>
 
{


 
 
 
 
s
e
t
C
o
m
p
l
e
t
e
d
(
(
p
r
e
v
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
 
n
e
w
 
S
e
t
(
p
r
e
v
)
;


 
 
 
 
 
 
i
f
 
(
!
s
t
e
p
)
 
r
e
t
u
r
n
 
n
e
x
t
;


 
 
 
 
 
 
i
f
 
(
n
e
x
t
.
h
a
s
(
s
t
e
p
.
i
d
)
)
 
n
e
x
t
.
d
e
l
e
t
e
(
s
t
e
p
.
i
d
)
;
 
e
l
s
e
 
n
e
x
t
.
a
d
d
(
s
t
e
p
.
i
d
)
;


 
 
 
 
 
 
t
r
y
 
{
 
l
o
c
a
l
S
t
o
r
a
g
e
.
s
e
t
I
t
e
m
(
S
T
O
R
A
G
E
_
K
E
Y
,
 
J
S
O
N
.
s
t
r
i
n
g
i
f
y
(
[
.
.
.
n
e
x
t
]
)
)
;
 
}
 
c
a
t
c
h
 
{
 
/
*
 
*
/
 
}


 
 
 
 
 
 
n
o
t
i
f
y
L
e
a
r
n
i
n
g
P
a
t
h
P
r
o
g
r
e
s
s
C
h
a
n
g
e
d
(
)
;


 
 
 
 
 
 
r
e
t
u
r
n
 
n
e
x
t
;


 
 
 
 
}
)
;


 
 
}
,
 
[
s
t
e
p
]
)
;




 
 
i
f
 
(
!
s
t
e
p
)
 
r
e
t
u
r
n
 
<
N
a
v
i
g
a
t
e
 
t
o
=
"
/
s
t
u
d
e
n
t
/
o
p
e
n
s
o
u
r
c
e
/
g
s
o
c
-
p
r
o
p
o
s
a
l
"
 
r
e
p
l
a
c
e
 
/
>
;




 
 
c
o
n
s
t
 
i
s
D
o
n
e
 
=
 
c
o
m
p
l
e
t
e
d
.
h
a
s
(
s
t
e
p
.
i
d
)
;


 
 
c
o
n
s
t
 
p
r
e
v
 
=
 
s
t
e
p
I
n
d
e
x
 
>
 
0
 
?
 
S
T
E
P
S
[
s
t
e
p
I
n
d
e
x
 
-
 
1
]
 
:
 
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
e
x
t
 
=
 
s
t
e
p
I
n
d
e
x
 
<
 
S
T
E
P
S
.
l
e
n
g
t
h
 
-
 
1
 
?
 
S
T
E
P
S
[
s
t
e
p
I
n
d
e
x
 
+
 
1
]
 
:
 
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
 
i
s
L
a
s
t
S
t
e
p
 
=
 
s
t
e
p
I
n
d
e
x
 
=
=
=
 
S
T
E
P
S
.
l
e
n
g
t
h
 
-
 
1
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
s
t
e
p
.
t
i
t
l
e
}
 
-
 
G
S
o
C
 
P
r
o
p
o
s
a
l
 
G
u
i
d
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
s
t
e
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
 
|
|
 
`
L
e
a
r
n
 
a
b
o
u
t
 
$
{
s
t
e
p
.
t
i
t
l
e
}
 
i
n
 
o
u
r
 
G
S
o
C
 
p
r
o
p
o
s
a
l
 
w
r
i
t
i
n
g
 
g
u
i
d
e
.
`
}


 
 
 
 
 
 
 
 
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
(
`
/
s
t
u
d
e
n
t
/
o
p
e
n
s
o
u
r
c
e
/
g
s
o
c
-
p
r
o
p
o
s
a
l
/
$
{
s
e
c
t
i
o
n
S
l
u
g
}
`
)
}


 
 
 
 
 
 
/
>




 
 
 
 
 
 
{
/
*
 
A
t
m
o
s
p
h
e
r
i
c
 
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
i
x
e
d
 
i
n
s
e
t
-
0
 
p
o
i
n
t
e
r
-
e
v
e
n
t
s
-
n
o
n
e
 
-
z
-
1
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
a
b
s
o
l
u
t
e
 
-
t
o
p
-
3
2
 
-
r
i
g
h
t
-
3
2
 
w
-
1
5
0
 
h
-
1
5
0
 
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
9
0
0
/
2
0
 
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
 
b
l
u
r
-
3
x
l
 
o
p
a
c
i
t
y
-
4
0
"
 
/
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
 
-
b
o
t
t
o
m
-
3
2
 
-
l
e
f
t
-
3
2
 
w
-
1
2
5
 
h
-
1
2
5
 
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
9
0
0
/
2
0
 
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
 
b
l
u
r
-
3
x
l
 
o
p
a
c
i
t
y
-
4
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
 
2
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
 
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
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
=
{
{
 
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
5
 
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
m
t
-
6
 
m
b
-
8
"


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
/
*
 
T
i
t
l
e
 
c
a
r
d
 
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
 
m
b
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
>
{
s
t
e
p
.
s
t
e
p
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
s
t
e
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
1
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
e
p
.
e
s
t
i
m
a
t
e
d
M
i
n
u
t
e
s
 
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
>
~
{
s
t
e
p
.
e
s
t
i
m
a
t
e
d
M
i
n
u
t
e
s
}
 
m
i
n
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
o
u
t
l
i
n
e
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
t
o
g
g
l
e
C
o
m
p
l
e
t
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
{
`
s
h
r
i
n
k
-
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
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
s
D
o
n
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
D
o
n
e
 
?
 
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
"
 
/
>
 
:
 
<
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
"
 
/
>
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
D
o
n
e
 
?
 
"
C
o
m
p
l
e
t
e
d
"
 
:
 
"
M
a
r
k
 
C
o
m
p
l
e
t
e
"
}


 
 
 
 
 
 
 
 
 
 
 
 
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
t
e
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
/
*
 
L
e
s
s
o
n
 
c
o
u
n
t
e
r
 
+
 
n
a
v
 
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
e
v
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
s
t
u
d
e
n
t
/
o
p
e
n
s
o
u
r
c
e
/
g
s
o
c
-
p
r
o
p
o
s
a
l
/
$
{
p
r
e
v
.
i
d
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
C
h
e
v
r
o
n
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
P
r
e
v
i
o
u
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
>


 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
<
s
p
a
n
 
/
>
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
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
e
p
.
s
t
e
p
}
 
o
f
 
{
S
T
E
P
S
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
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
{
n
e
x
t
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
s
t
u
d
e
n
t
/
o
p
e
n
s
o
u
r
c
e
/
g
s
o
c
-
p
r
o
p
o
s
a
l
/
$
{
n
e
x
t
.
i
d
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
N
e
x
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
h
e
v
r
o
n
R
i
g
h
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
>


 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
<
s
p
a
n
 
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
 
C
o
n
t
e
n
t
 
s
e
c
t
i
o
n
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
 
M
e
n
t
o
r
'
s
 
N
o
t
e
 
*
/
}


 
 
 
 
 
 
 
 
{
s
t
e
p
.
m
e
n
t
o
r
_
g
u
i
d
a
n
c
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
 
1
5
 
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
=
{
{
 
d
e
l
a
y
:
 
0
.
1
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
5
 
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
/
5
0
 
b
o
r
d
e
r
-
l
-
4
 
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
r
-
2
x
l
 
p
-
6
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
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
M
e
s
s
a
g
e
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
 
/
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
r
"
>
F
r
o
m
 
Y
o
u
r
 
M
e
n
t
o
r
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
p
r
e
-
l
i
n
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
e
p
.
m
e
n
t
o
r
_
g
u
i
d
a
n
c
e
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




 
 
 
 
 
 
 
 
{
/
*
 
W
h
a
t
 
Y
o
u
 
N
e
e
d
 
t
o
 
K
n
o
w
 
*
/
}


 
 
 
 
 
 
 
 
{
s
t
e
p
.
d
e
t
a
i
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
 
1
5
 
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
=
{
{
 
d
e
l
a
y
:
 
0
.
1
5
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
5
 
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
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
/
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
r
"
>
W
h
a
t
 
Y
o
u
 
N
e
e
d
 
t
o
 
K
n
o
w
<
/
h
2
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
s
t
e
p
.
d
e
t
a
i
l
s
.
m
a
p
(
(
d
e
t
a
i
l
,
 
i
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
5
 
h
-
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
 
m
t
-
0
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
d
e
t
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
 
C
o
m
m
o
n
 
M
i
s
t
a
k
e
s
 
*
/
}


 
 
 
 
 
 
 
 
{
s
t
e
p
.
m
i
s
t
a
k
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
 
1
5
 
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
=
{
{
 
d
e
l
a
y
:
 
0
.
2
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
5
 
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
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
A
l
e
r
t
T
r
i
a
n
g
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
 
/
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
r
"
>
M
i
s
t
a
k
e
s
 
t
o
 
A
v
o
i
d
<
/
h
2
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
s
t
e
p
.
m
i
s
t
a
k
e
s
.
m
a
p
(
(
m
i
s
t
a
k
e
,
 
i
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
/
5
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
A
l
e
r
t
T
r
i
a
n
g
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
m
i
s
t
a
k
e
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
 
R
e
s
o
u
r
c
e
s
 
*
/
}


 
 
 
 
 
 
 
 
{
s
t
e
p
.
r
e
s
o
u
r
c
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
 
1
5
 
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
=
{
{
 
d
e
l
a
y
:
 
0
.
2
5
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
5
 
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
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
L
i
n
k
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
 
/
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
r
"
>
R
e
s
o
u
r
c
e
s
<
/
h
2
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
s
t
e
p
.
r
e
s
o
u
r
c
e
s
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
a


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
i
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
r
e
f
=
{
r
.
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
3
 
p
x
-
4
 
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
g
r
a
y
-
7
0
0
 
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
 
g
r
o
u
p
 
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
 
g
r
o
u
p
-
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
6
0
0
 
d
a
r
k
:
g
r
o
u
p
-
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
3
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
{
r
.
t
i
t
l
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
 
c
a
p
i
t
a
l
i
z
e
 
m
t
-
0
.
5
"
>
{
r
.
t
y
p
e
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
 
g
r
o
u
p
-
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
5
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
 
P
r
o
 
T
i
p
s
 
*
/
}


 
 
 
 
 
 
 
 
{
s
t
e
p
.
t
i
p
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
 
1
5
 
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
=
{
{
 
d
e
l
a
y
:
 
0
.
3
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
5
 
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
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
/
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
r
"
>
P
r
o
 
T
i
p
s
<
/
h
2
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
s
t
e
p
.
t
i
p
s
.
m
a
p
(
(
t
i
p
,
 
i
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
/
5
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
t
i
p
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
 
P
r
o
p
o
s
a
l
 
T
e
m
p
l
a
t
e
 
-
 
o
n
l
y
 
o
n
 
t
h
e
 
l
a
s
t
 
s
t
e
p
 
*
/
}


 
 
 
 
 
 
 
 
{
i
s
L
a
s
t
S
t
e
p
 
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
 
1
5
 
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
=
{
{
 
d
e
l
a
y
:
 
0
.
3
5
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
5
 
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
 
m
b
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
 
/
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
r
"
>
P
r
o
p
o
s
a
l
 
T
e
m
p
l
a
t
e
<
/
h
2
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
f
l
e
x
 
g
a
p
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
o
p
y
B
u
t
t
o
n
 
t
e
x
t
=
{
P
R
O
P
O
S
A
L
_
T
E
M
P
L
A
T
E
}
 
l
a
b
e
l
=
"
C
o
p
y
 
T
e
m
p
l
a
t
e
"
 
/
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
o
u
t
l
i
n
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
i
z
e
=
"
s
m
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
 
s
e
t
S
h
o
w
T
e
m
p
l
a
t
e
(
!
s
h
o
w
T
e
m
p
l
a
t
e
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
h
e
v
r
o
n
D
o
w
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
t
r
a
n
s
f
o
r
m
 
$
{
s
h
o
w
T
e
m
p
l
a
t
e
 
?
 
"
r
o
t
a
t
e
-
1
8
0
"
 
:
 
"
"
}
`
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
h
o
w
T
e
m
p
l
a
t
e
 
?
 
"
H
i
d
e
"
 
:
 
"
P
r
e
v
i
e
w
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
/
5
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
 
m
b
-
3
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
t
r
o
n
g
>
H
o
w
 
t
o
 
u
s
e
:
<
/
s
t
r
o
n
g
>
 
C
o
p
y
 
t
h
i
s
 
t
e
m
p
l
a
t
e
,
 
p
a
s
t
e
 
i
t
 
i
n
t
o
 
G
o
o
g
l
e
 
D
o
c
s
 
o
r
 
y
o
u
r
 
o
r
g
'
s
 
s
u
b
m
i
s
s
i
o
n
 
f
o
r
m
a
t
,
 
a
n
d
 
f
i
l
l
 
i
n
 
e
v
e
r
y
 
s
e
c
t
i
o
n
.
 
S
h
a
r
e
 
t
h
e
 
d
r
a
f
t
 
w
i
t
h
 
y
o
u
r
 
m
e
n
t
o
r
 
b
e
f
o
r
e
 
s
u
b
m
i
t
t
i
n
g
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




 
 
 
 
 
 
 
 
 
 
 
 
{
s
h
o
w
T
e
m
p
l
a
t
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
r
e
l
a
t
i
v
e
 
b
g
-
g
r
a
y
-
9
5
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
8
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
 
f
o
n
t
-
m
o
n
o
"
>
g
s
o
c
-
p
r
o
p
o
s
a
l
-
t
e
m
p
l
a
t
e
.
m
d
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
o
p
y
B
u
t
t
o
n
 
t
e
x
t
=
{
P
R
O
P
O
S
A
L
_
T
E
M
P
L
A
T
E
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
p
r
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
p
-
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
g
r
a
y
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
o
n
o
 
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
p
r
e
-
w
r
a
p
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
P
R
O
P
O
S
A
L
_
T
E
M
P
L
A
T
E
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
r
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
o
t
t
o
m
 
n
a
v
i
g
a
t
i
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
 
1
5
 
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
=
{
{
 
d
e
l
a
y
:
 
0
.
4
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
5
 
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
 
p
t
-
4
"


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
{
p
r
e
v
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
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
s
t
u
d
e
n
t
/
o
p
e
n
s
o
u
r
c
e
/
g
s
o
c
-
p
r
o
p
o
s
a
l
/
$
{
p
r
e
v
.
i
d
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
 
p
x
-
5
 
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
a
y
-
7
0
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
g
r
a
y
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
m
 
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
C
h
e
v
r
o
n
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
r
e
v
.
t
i
t
l
e
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
>


 
 
 
 
 
 
 
 
 
 
)
 
:
 
<
s
p
a
n
 
/
>
}


 
 
 
 
 
 
 
 
 
 
{
n
e
x
t
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
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
s
t
u
d
e
n
t
/
o
p
e
n
s
o
u
r
c
e
/
g
s
o
c
-
p
r
o
p
o
s
a
l
/
$
{
n
e
x
t
.
i
d
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
 
p
x
-
5
 
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
 
b
g
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
s
m
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
n
e
x
t
.
t
i
t
l
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
h
e
v
r
o
n
R
i
g
h
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


 
 
 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
>


 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
L
i
n
k


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
o
=
"
/
s
t
u
d
e
n
t
/
o
p
e
n
s
o
u
r
c
e
/
g
s
o
c
-
p
r
o
p
o
s
a
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
 
p
x
-
5
 
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
 
b
g
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
s
m
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
B
a
c
k
 
t
o
 
O
v
e
r
v
i
e
w


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
h
e
v
r
o
n
R
i
g
h
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


 
 
 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
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


