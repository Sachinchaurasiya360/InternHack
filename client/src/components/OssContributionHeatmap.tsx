
i
m
p
o
r
t
 
R
e
a
c
t
,
 
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
 
A
c
t
i
v
i
t
y
C
a
l
e
n
d
a
r
 
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
a
c
t
i
v
i
t
y
-
c
a
l
e
n
d
a
r
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
 
u
s
e
T
h
e
m
e
S
t
o
r
e
 
}
 
f
r
o
m
 
"
.
.
/
l
i
b
/
t
h
e
m
e
.
s
t
o
r
e
"
;


i
m
p
o
r
t
 
{
 
T
o
o
l
t
i
p
 
a
s
 
R
e
a
c
t
T
o
o
l
t
i
p
 
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
t
o
o
l
t
i
p
"
;


i
m
p
o
r
t
 
"
r
e
a
c
t
-
t
o
o
l
t
i
p
/
d
i
s
t
/
r
e
a
c
t
-
t
o
o
l
t
i
p
.
c
s
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
 
A
c
t
i
v
i
t
y
D
e
t
a
i
l
s
 
{


 
 
g
u
i
d
e
S
t
e
p
s
:
 
n
u
m
b
e
r
;


 
 
r
e
p
o
S
u
g
g
e
s
t
i
o
n
s
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
s
M
e
r
g
e
d
:
 
n
u
m
b
e
r
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
 
A
c
t
i
v
i
t
y
R
e
s
p
o
n
s
e
 
{


 
 
d
a
t
e
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
u
n
t
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
 
n
u
m
b
e
r
;


 
 
d
e
t
a
i
l
s
:
 
A
c
t
i
v
i
t
y
D
e
t
a
i
l
s
;


}




c
o
n
s
t
 
f
o
r
m
a
t
A
c
t
i
v
i
t
y
D
a
t
e
 
=
 
(
d
a
t
e
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
 
{


 
 
c
o
n
s
t
 
[
y
e
a
r
,
 
m
o
n
t
h
,
 
d
a
y
]
 
=
 
d
a
t
e
.
s
p
l
i
t
(
"
-
"
)
.
m
a
p
(
N
u
m
b
e
r
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
w
 
D
a
t
e
(
y
e
a
r
,
 
(
m
o
n
t
h
 
?
?
 
1
)
 
-
 
1
,
 
d
a
y
 
?
?
 
1
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
 
{


 
 
 
 
w
e
e
k
d
a
y
:
 
"
s
h
o
r
t
"
,


 
 
 
 
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


 
 
 
 
d
a
y
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
,


 
 
}
)
;


}
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
r
o
p
s
 
{


 
 
c
o
m
p
a
c
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


 
 
s
t
u
d
e
n
t
I
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


}




e
x
p
o
r
t
 
c
o
n
s
t
 
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
 
=
 
R
e
a
c
t
.
m
e
m
o
(
f
u
n
c
t
i
o
n
 
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
(
{
 
c
o
m
p
a
c
t
 
=
 
f
a
l
s
e
,
 
s
t
u
d
e
n
t
I
d
 
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
h
e
m
e
 
=
 
u
s
e
T
h
e
m
e
S
t
o
r
e
(
(
s
)
 
=
>
 
s
.
t
h
e
m
e
)
;


 
 
c
o
n
s
t
 
i
s
D
a
r
k
 
=
 
t
h
e
m
e
 
=
=
=
 
"
d
a
r
k
"
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
 
i
s
E
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
-
a
c
t
i
v
i
t
y
"
,
 
s
t
u
d
e
n
t
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


 
 
 
 
 
 
c
o
n
s
t
 
u
r
l
 
=
 
s
t
u
d
e
n
t
I
d
 
?
 
`
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
a
c
t
i
v
i
t
y
?
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
$
{
s
t
u
d
e
n
t
I
d
}
`
 
:
 
"
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
a
c
t
i
v
i
t
y
"
;


 
 
 
 
 
 
c
o
n
s
t
 
r
e
s
 
=
 
a
w
a
i
t
 
a
p
i
.
g
e
t
<
{
 
a
c
t
i
v
i
t
y
:
 
A
c
t
i
v
i
t
y
R
e
s
p
o
n
s
e
[
]
 
}
>
(
u
r
l
)
;


 
 
 
 
 
 
r
e
t
u
r
n
 
r
e
s
.
d
a
t
a
.
a
c
t
i
v
i
t
y
;


 
 
 
 
}
,


 
 
 
 
s
t
a
l
e
T
i
m
e
:
 
5
 
*
 
6
0
 
*
 
1
0
0
0
,


 
 
}
)
;




 
 
c
o
n
s
t
 
a
v
a
i
l
a
b
l
e
Y
e
a
r
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


 
 
 
 
i
f
 
(
!
d
a
t
a
 
|
|
 
d
a
t
a
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
 
[
n
e
w
 
D
a
t
e
(
)
.
g
e
t
F
u
l
l
Y
e
a
r
(
)
]
;


 
 
 
 
c
o
n
s
t
 
y
e
a
r
s
 
=
 
n
e
w
 
S
e
t
<
n
u
m
b
e
r
>
(
)
;


 
 
 
 
d
a
t
a
.
f
o
r
E
a
c
h
(
d
 
=
>
 
y
e
a
r
s
.
a
d
d
(
n
e
w
 
D
a
t
e
(
d
.
d
a
t
e
)
.
g
e
t
F
u
l
l
Y
e
a
r
(
)
)
)
;


 
 
 
 
y
e
a
r
s
.
a
d
d
(
n
e
w
 
D
a
t
e
(
)
.
g
e
t
F
u
l
l
Y
e
a
r
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
y
e
a
r
s
)
.
s
o
r
t
(
(
a
,
 
b
)
 
=
>
 
b
 
-
 
a
)
;


 
 
}
,
 
[
d
a
t
a
]
)
;




 
 
c
o
n
s
t
 
[
s
e
l
e
c
t
e
d
Y
e
a
r
,
 
s
e
t
S
e
l
e
c
t
e
d
Y
e
a
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
n
u
m
b
e
r
>
(
a
v
a
i
l
a
b
l
e
Y
e
a
r
s
[
0
]
 
?
?
 
n
e
w
 
D
a
t
e
(
)
.
g
e
t
F
u
l
l
Y
e
a
r
(
)
)
;




 
 
c
o
n
s
t
 
h
e
a
t
m
a
p
D
a
t
a
 
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


 
 
 
 
i
f
 
(
!
d
a
t
a
 
|
|
 
d
a
t
a
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
 
s
o
r
t
e
d
 
=
 
[
.
.
.
d
a
t
a
]
.
s
o
r
t
(
(
a
,
 
b
)
 
=
>
 
a
.
d
a
t
e
.
l
o
c
a
l
e
C
o
m
p
a
r
e
(
b
.
d
a
t
e
)
)
;




 
 
 
 
i
f
 
(
c
o
m
p
a
c
t
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
t
h
r
e
e
M
o
n
t
h
s
A
g
o
 
=
 
n
e
w
 
D
a
t
e
(
)
;


 
 
 
 
 
 
t
h
r
e
e
M
o
n
t
h
s
A
g
o
.
s
e
t
M
o
n
t
h
(
t
h
r
e
e
M
o
n
t
h
s
A
g
o
.
g
e
t
M
o
n
t
h
(
)
 
-
 
3
)
;


 
 
 
 
 
 
c
o
n
s
t
 
m
i
n
D
a
t
e
S
t
r
 
=
 
t
h
r
e
e
M
o
n
t
h
s
A
g
o
.
t
o
I
S
O
S
t
r
i
n
g
(
)
.
s
p
l
i
t
(
"
T
"
)
[
0
]
;


 
 
 
 
 
 
c
o
n
s
t
 
f
i
l
t
e
r
e
d
 
=
 
s
o
r
t
e
d
.
f
i
l
t
e
r
(
(
d
)
 
=
>
 
d
.
d
a
t
e
 
>
=
 
m
i
n
D
a
t
e
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
 
f
i
l
t
e
r
e
d
.
l
e
n
g
t
h
 
>
 
0
 
?
 
f
i
l
t
e
r
e
d
 
:
 
s
o
r
t
e
d
;


 
 
 
 
}




 
 
 
 
c
o
n
s
t
 
y
e
a
r
S
t
r
 
=
 
s
e
l
e
c
t
e
d
Y
e
a
r
.
t
o
S
t
r
i
n
g
(
)
;


 
 
 
 
r
e
t
u
r
n
 
s
o
r
t
e
d
.
f
i
l
t
e
r
(
d
 
=
>
 
d
.
d
a
t
e
.
s
t
a
r
t
s
W
i
t
h
(
y
e
a
r
S
t
r
)
)
;


 
 
}
,
 
[
d
a
t
a
,
 
c
o
m
p
a
c
t
,
 
s
e
l
e
c
t
e
d
Y
e
a
r
]
)
;




 
 
/
/
 
F
i
l
l
 
e
v
e
r
y
 
d
a
y
 
i
n
 
t
h
e
 
r
a
n
g
e
 
s
o
 
t
h
e
 
c
a
l
e
n
d
a
r
 
r
e
n
d
e
r
s
 
a
 
c
o
m
p
l
e
t
e
 
g
r
i
d


 
 
c
o
n
s
t
 
c
a
l
e
n
d
a
r
D
a
t
a
 
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


 
 
 
 
l
e
t
 
s
t
a
r
t
D
a
t
e
:
 
D
a
t
e
;


 
 
 
 
l
e
t
 
e
n
d
D
a
t
e
:
 
D
a
t
e
;




 
 
 
 
i
f
 
(
c
o
m
p
a
c
t
)
 
{


 
 
 
 
 
 
e
n
d
D
a
t
e
 
=
 
n
e
w
 
D
a
t
e
(
)
;


 
 
 
 
 
 
s
t
a
r
t
D
a
t
e
 
=
 
n
e
w
 
D
a
t
e
(
)
;


 
 
 
 
 
 
s
t
a
r
t
D
a
t
e
.
s
e
t
M
o
n
t
h
(
s
t
a
r
t
D
a
t
e
.
g
e
t
M
o
n
t
h
(
)
 
-
 
3
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
 
c
u
r
r
e
n
t
Y
e
a
r
 
=
 
n
e
w
 
D
a
t
e
(
)
.
g
e
t
F
u
l
l
Y
e
a
r
(
)
;


 
 
 
 
 
 
s
t
a
r
t
D
a
t
e
 
=
 
n
e
w
 
D
a
t
e
(
s
e
l
e
c
t
e
d
Y
e
a
r
,
 
0
,
 
1
)
;


 
 
 
 
 
 
e
n
d
D
a
t
e
 
=
 
s
e
l
e
c
t
e
d
Y
e
a
r
 
=
=
=
 
c
u
r
r
e
n
t
Y
e
a
r
 
?
 
n
e
w
 
D
a
t
e
(
)
 
:
 
n
e
w
 
D
a
t
e
(
s
e
l
e
c
t
e
d
Y
e
a
r
,
 
1
1
,
 
3
1
)
;


 
 
 
 
}




 
 
 
 
c
o
n
s
t
 
a
l
l
D
a
y
s
:
 
A
c
t
i
v
i
t
y
R
e
s
p
o
n
s
e
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
 
d
 
=
 
n
e
w
 
D
a
t
e
(
s
t
a
r
t
D
a
t
e
)
;
 
d
 
<
=
 
e
n
d
D
a
t
e
;
 
d
.
s
e
t
D
a
t
e
(
d
.
g
e
t
D
a
t
e
(
)
 
+
 
1
)
)
 
{


 
 
 
 
 
 
a
l
l
D
a
y
s
.
p
u
s
h
(
{


 
 
 
 
 
 
 
 
d
a
t
e
:
 
d
.
t
o
I
S
O
S
t
r
i
n
g
(
)
.
s
p
l
i
t
(
"
T
"
)
[
0
]
!
,


 
 
 
 
 
 
 
 
c
o
u
n
t
:
 
0
,


 
 
 
 
 
 
 
 
l
e
v
e
l
:
 
0
,


 
 
 
 
 
 
 
 
d
e
t
a
i
l
s
:
 
{
 
g
u
i
d
e
S
t
e
p
s
:
 
0
,
 
r
e
p
o
S
u
g
g
e
s
t
i
o
n
s
:
 
0
,
 
p
r
s
M
e
r
g
e
d
:
 
0
 
}
,


 
 
 
 
 
 
}
)
;


 
 
 
 
}




 
 
 
 
i
f
 
(
h
e
a
t
m
a
p
D
a
t
a
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
d
a
t
a
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
h
e
a
t
m
a
p
D
a
t
a
.
m
a
p
(
d
 
=
>
 
[
d
.
d
a
t
e
,
 
d
]
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
l
l
D
a
y
s
.
m
a
p
(
d
a
y
 
=
>
 
d
a
t
a
M
a
p
.
g
e
t
(
d
a
y
.
d
a
t
e
)
 
|
|
 
d
a
y
)
;


 
 
 
 
}




 
 
 
 
r
e
t
u
r
n
 
a
l
l
D
a
y
s
;


 
 
}
,
 
[
h
e
a
t
m
a
p
D
a
t
a
,
 
c
o
m
p
a
c
t
,
 
s
e
l
e
c
t
e
d
Y
e
a
r
]
)
;




 
 
/
/
 
─
─
 
L
o
a
d
i
n
g
 
s
k
e
l
e
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
{
`
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
 
p
-
3
 
$
{
i
s
D
a
r
k
 
?
 
"
b
g
-
[
#
0
d
1
1
1
7
]
 
b
o
r
d
e
r
-
[
#
3
0
3
6
3
d
]
"
 
:
 
"
b
g
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
[
#
d
0
d
7
d
e
]
"
}
`
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
h
-
[
1
2
0
p
x
]
 
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
[
3
p
x
]
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
[
.
.
.
A
r
r
a
y
(
7
)
]
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
{
`
w
-
[
1
0
p
x
]
 
h
-
[
1
0
p
x
]
 
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
 
a
n
i
m
a
t
e
-
p
u
l
s
e
 
$
{
i
s
D
a
r
k
 
?
 
"
b
g
-
[
#
1
6
1
b
2
2
]
"
 
:
 
"
b
g
-
[
#
e
b
e
d
f
0
]
"
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
a
n
i
m
a
t
i
o
n
D
e
l
a
y
:
 
`
$
{
i
 
*
 
8
0
}
m
s
`
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
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


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
)
;


 
 
}




 
 
i
f
 
(
i
s
E
r
r
o
r
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
{
`
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
 
p
-
3
 
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
 
$
{
i
s
D
a
r
k
 
?
 
"
b
g
-
[
#
0
d
1
1
1
7
]
 
b
o
r
d
e
r
-
[
#
3
0
3
6
3
d
]
"
 
:
 
"
b
g
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
[
#
d
0
d
7
d
e
]
"
}
`
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
{
`
t
e
x
t
-
x
s
 
$
{
i
s
D
a
r
k
 
?
 
"
t
e
x
t
-
[
#
8
b
9
4
9
e
]
"
 
:
 
"
t
e
x
t
-
[
#
5
7
6
0
6
a
]
"
}
`
}
>
C
o
u
l
d
 
n
o
t
 
l
o
a
d
 
a
c
t
i
v
i
t
y
 
d
a
t
a
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


 
 
 
 
)
;


 
 
}




 
 
c
o
n
s
t
 
t
o
t
a
l
A
c
t
i
v
i
t
y
 
=
 
h
e
a
t
m
a
p
D
a
t
a
?
.
r
e
d
u
c
e
(
(
s
u
m
,
 
d
)
 
=
>
 
s
u
m
 
+
 
d
.
c
o
u
n
t
,
 
0
)
 
?
?
 
0
;


 
 
c
o
n
s
t
 
p
e
r
i
o
d
L
a
b
e
l
 
=
 
c
o
m
p
a
c
t
 
?
 
"
t
h
e
 
l
a
s
t
 
3
 
m
o
n
t
h
s
"
 
:
 
S
t
r
i
n
g
(
s
e
l
e
c
t
e
d
Y
e
a
r
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
{
`
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
i
s
D
a
r
k
 
?
 
"
b
g
-
[
#
0
d
1
1
1
7
]
 
b
o
r
d
e
r
-
[
#
3
0
3
6
3
d
]
"
 
:
 
"
b
g
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
[
#
d
0
d
7
d
e
]
"
}
`
}
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
 
—
 
G
i
t
H
u
b
 
s
t
y
l
e
:
 
"
X
 
c
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
s
 
i
n
 
…
"
 
w
i
t
h
 
y
e
a
r
 
t
a
b
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
{
`
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
3
 
b
o
r
d
e
r
-
b
 
$
{
i
s
D
a
r
k
 
?
 
"
b
o
r
d
e
r
-
[
#
3
0
3
6
3
d
]
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
[
#
d
0
d
7
d
e
]
"
}
`
}
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
{
`
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
n
o
r
m
a
l
 
$
{
i
s
D
a
r
k
 
?
 
"
t
e
x
t
-
[
#
e
6
e
d
f
3
]
"
 
:
 
"
t
e
x
t
-
[
#
1
f
2
3
2
8
]
"
}
`
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
"
>
{
t
o
t
a
l
A
c
t
i
v
i
t
y
.
t
o
L
o
c
a
l
e
S
t
r
i
n
g
(
)
}
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
t
o
t
a
l
A
c
t
i
v
i
t
y
 
=
=
=
 
1
 
?
 
"
c
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
"
 
:
 
"
c
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
s
"
}
 
i
n
 
{
p
e
r
i
o
d
L
a
b
e
l
}


 
 
 
 
 
 
 
 
<
/
h
2
>




 
 
 
 
 
 
 
 
{
!
c
o
m
p
a
c
t
 
&
&
 
a
v
a
i
l
a
b
l
e
Y
e
a
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
 
1
 
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
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
a
v
a
i
l
a
b
l
e
Y
e
a
r
s
.
m
a
p
(
y
e
a
r
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
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
y
e
a
r
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
s
e
t
S
e
l
e
c
t
e
d
Y
e
a
r
(
y
e
a
r
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
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
y
e
a
r
 
=
=
=
 
s
e
l
e
c
t
e
d
Y
e
a
r


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
i
s
D
a
r
k


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
b
g
-
[
#
1
f
6
f
e
b
]
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
b
g
-
[
#
0
9
6
9
d
a
]
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
i
s
D
a
r
k


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
t
e
x
t
-
[
#
8
b
9
4
9
e
]
 
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
[
#
e
6
e
d
f
3
]
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
t
e
x
t
-
[
#
5
7
6
0
6
a
]
 
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
[
#
1
f
2
3
2
8
]
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
y
e
a
r
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




 
 
 
 
 
 
{
/
*
 
C
a
l
e
n
d
a
r
 
g
r
i
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
p
x
-
4
 
p
y
-
3
 
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
A
c
t
i
v
i
t
y
C
a
l
e
n
d
a
r


 
 
 
 
 
 
 
 
 
 
d
a
t
a
=
{
c
a
l
e
n
d
a
r
D
a
t
a
}


 
 
 
 
 
 
 
 
 
 
t
h
e
m
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
l
i
g
h
t
:
 
[
"
#
e
b
e
d
f
0
"
,
 
"
#
9
b
e
9
a
7
"
,
 
"
#
4
0
c
4
6
3
"
,
 
"
#
3
0
a
1
4
e
"
,
 
"
#
2
1
6
e
3
9
"
]
,


 
 
 
 
 
 
 
 
 
 
 
 
d
a
r
k
:
 
[
"
#
1
6
1
b
2
2
"
,
 
"
#
0
e
4
4
2
9
"
,
 
"
#
0
0
6
d
3
2
"
,
 
"
#
2
6
a
6
4
1
"
,
 
"
#
3
9
d
3
5
3
"
]
,


 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
S
c
h
e
m
e
=
{
i
s
D
a
r
k
 
?
 
"
d
a
r
k
"
 
:
 
"
l
i
g
h
t
"
}


 
 
 
 
 
 
 
 
 
 
b
l
o
c
k
S
i
z
e
=
{
c
o
m
p
a
c
t
 
?
 
1
0
 
:
 
1
1
}


 
 
 
 
 
 
 
 
 
 
b
l
o
c
k
M
a
r
g
i
n
=
{
c
o
m
p
a
c
t
 
?
 
2
 
:
 
3
}


 
 
 
 
 
 
 
 
 
 
b
l
o
c
k
R
a
d
i
u
s
=
{
2
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
{
1
0
}


 
 
 
 
 
 
 
 
 
 
s
h
o
w
M
o
n
t
h
L
a
b
e
l
s
=
{
t
r
u
e
}


 
 
 
 
 
 
 
 
 
 
h
i
d
e
T
o
t
a
l
C
o
u
n
t


 
 
 
 
 
 
 
 
 
 
h
i
d
e
C
o
l
o
r
L
e
g
e
n
d


 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
s
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
m
o
n
t
h
s
:
 
[
"
J
a
n
"
,
 
"
F
e
b
"
,
 
"
M
a
r
"
,
 
"
A
p
r
"
,
 
"
M
a
y
"
,
 
"
J
u
n
"
,
 
"
J
u
l
"
,
 
"
A
u
g
"
,
 
"
S
e
p
"
,
 
"
O
c
t
"
,
 
"
N
o
v
"
,
 
"
D
e
c
"
]
,


 
 
 
 
 
 
 
 
 
 
 
 
w
e
e
k
d
a
y
s
:
 
[
"
S
u
n
"
,
 
"
M
o
n
"
,
 
"
T
u
e
"
,
 
"
W
e
d
"
,
 
"
T
h
u
"
,
 
"
F
r
i
"
,
 
"
S
a
t
"
]
,


 
 
 
 
 
 
 
 
 
 
 
 
t
o
t
a
l
C
o
u
n
t
:
 
"
{
{
c
o
u
n
t
}
}
 
c
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
s
 
i
n
 
{
{
y
e
a
r
}
}
"
,


 
 
 
 
 
 
 
 
 
 
 
 
l
e
g
e
n
d
:
 
{
 
l
e
s
s
:
 
"
L
e
s
s
"
,
 
m
o
r
e
:
 
"
M
o
r
e
"
 
}
,


 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
r
e
n
d
e
r
B
l
o
c
k
=
{
(
b
l
o
c
k
,
 
a
c
t
i
v
i
t
y
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
c
t
 
=
 
a
c
t
i
v
i
t
y
 
a
s
 
A
c
t
i
v
i
t
y
R
e
s
p
o
n
s
e
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
t
o
o
l
t
i
p
I
d
 
=
 
`
o
s
s
-
t
i
p
-
$
{
a
c
t
.
d
a
t
e
}
`
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
t
o
t
a
l
 
=
 
a
c
t
.
c
o
u
n
t
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
d
e
t
a
i
l
s
 
=
 
a
c
t
.
d
e
t
a
i
l
s
 
|
|
 
{
 
g
u
i
d
e
S
t
e
p
s
:
 
0
,
 
r
e
p
o
S
u
g
g
e
s
t
i
o
n
s
:
 
0
,
 
p
r
s
M
e
r
g
e
d
:
 
0
 
}
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
d
a
t
e
S
t
r
 
=
 
f
o
r
m
a
t
A
c
t
i
v
i
t
y
D
a
t
e
(
a
c
t
.
d
a
t
e
)
;




 
 
 
 
 
 
 
 
 
 
 
 
l
e
t
 
t
o
o
l
t
i
p
C
o
n
t
e
n
t
:
 
s
t
r
i
n
g
;


 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
t
o
t
a
l
 
>
 
0
)
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
d
e
t
a
i
l
s
.
g
u
i
d
e
S
t
e
p
s
)
 
p
a
r
t
s
.
p
u
s
h
(
`
$
{
d
e
t
a
i
l
s
.
g
u
i
d
e
S
t
e
p
s
}
 
g
u
i
d
e
 
s
t
e
p
$
{
d
e
t
a
i
l
s
.
g
u
i
d
e
S
t
e
p
s
 
>
 
1
 
?
 
"
s
"
 
:
 
"
"
}
`
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
d
e
t
a
i
l
s
.
r
e
p
o
S
u
g
g
e
s
t
i
o
n
s
)
 
p
a
r
t
s
.
p
u
s
h
(
`
$
{
d
e
t
a
i
l
s
.
r
e
p
o
S
u
g
g
e
s
t
i
o
n
s
}
 
r
e
p
o
 
s
u
g
g
e
s
t
i
o
n
$
{
d
e
t
a
i
l
s
.
r
e
p
o
S
u
g
g
e
s
t
i
o
n
s
 
>
 
1
 
?
 
"
s
"
 
:
 
"
"
}
`
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
d
e
t
a
i
l
s
.
p
r
s
M
e
r
g
e
d
)
 
p
a
r
t
s
.
p
u
s
h
(
`
$
{
d
e
t
a
i
l
s
.
p
r
s
M
e
r
g
e
d
}
 
P
R
$
{
d
e
t
a
i
l
s
.
p
r
s
M
e
r
g
e
d
 
>
 
1
 
?
 
"
s
"
 
:
 
"
"
}
 
m
e
r
g
e
d
`
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
o
o
l
t
i
p
C
o
n
t
e
n
t
 
=
 
`
$
{
t
o
t
a
l
}
 
c
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
$
{
t
o
t
a
l
 
!
=
=
 
1
 
?
 
"
s
"
 
:
 
"
"
}
 
o
n
 
$
{
d
a
t
e
S
t
r
}
`
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
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
 
>
 
0
)
 
t
o
o
l
t
i
p
C
o
n
t
e
n
t
 
+
=
 
`
\
n
$
{
p
a
r
t
s
.
j
o
i
n
(
"
 
·
 
"
)
}
`
;


 
 
 
 
 
 
 
 
 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
o
o
l
t
i
p
C
o
n
t
e
n
t
 
=
 
`
N
o
 
c
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
s
 
o
n
 
$
{
d
a
t
e
S
t
r
}
`
;


 
 
 
 
 
 
 
 
 
 
 
 
}




 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
R
e
a
c
t
.
c
l
o
n
e
E
l
e
m
e
n
t
(
b
l
o
c
k
,
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
"
d
a
t
a
-
t
o
o
l
t
i
p
-
i
d
"
:
 
t
o
o
l
t
i
p
I
d
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
"
d
a
t
a
-
t
o
o
l
t
i
p
-
c
o
n
t
e
n
t
"
:
 
t
o
o
l
t
i
p
C
o
n
t
e
n
t
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
h
i
l
d
r
e
n
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
R
e
a
c
t
T
o
o
l
t
i
p


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
d
=
{
t
o
o
l
t
i
p
I
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
=
"
t
o
p
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
=
{
i
s
D
a
r
k
 
?
 
"
d
a
r
k
"
 
:
 
"
l
i
g
h
t
"
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
!
t
e
x
t
-
[
1
1
p
x
]
 
!
l
e
a
d
i
n
g
-
s
n
u
g
 
!
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
 
!
p
y
-
1
.
5
 
!
p
x
-
2
.
5
 
!
o
p
a
c
i
t
y
-
1
0
0
 
!
z
-
5
0
 
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
C
o
l
o
r
:
 
i
s
D
a
r
k
 
?
 
"
#
1
c
2
1
2
8
"
 
:
 
"
#
2
4
2
9
2
f
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
i
s
D
a
r
k
 
?
 
"
#
e
6
e
d
f
3
"
 
:
 
"
#
f
f
f
f
f
f
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
i
s
D
a
r
k
 
?
 
"
1
p
x
 
s
o
l
i
d
 
#
3
0
3
6
3
d
"
 
:
 
"
n
o
n
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
x
S
h
a
d
o
w
:
 
"
0
 
1
p
x
 
3
p
x
 
r
g
b
a
(
0
,
0
,
0
,
0
.
1
2
)
,
 
0
 
1
p
x
 
2
p
x
 
r
g
b
a
(
0
,
0
,
0
,
0
.
1
4
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
,


 
 
 
 
 
 
 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
 
 
 
 
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




 
 
 
 
 
 
{
/
*
 
F
o
o
t
e
r
 
—
 
L
e
s
s
/
M
o
r
e
 
l
e
g
e
n
d
 
(
G
i
t
H
u
b
 
s
t
y
l
e
)
 
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
{
`
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
e
n
d
 
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
4
 
p
b
-
3
 
p
t
-
0
`
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
 
$
{
i
s
D
a
r
k
 
?
 
"
t
e
x
t
-
[
#
8
b
9
4
9
e
]
"
 
:
 
"
t
e
x
t
-
[
#
5
7
6
0
6
a
]
"
}
`
}
>
L
e
s
s
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
{
(
i
s
D
a
r
k


 
 
 
 
 
 
 
 
 
 
?
 
[
"
#
1
6
1
b
2
2
"
,
 
"
#
0
e
4
4
2
9
"
,
 
"
#
0
0
6
d
3
2
"
,
 
"
#
2
6
a
6
4
1
"
,
 
"
#
3
9
d
3
5
3
"
]


 
 
 
 
 
 
 
 
 
 
:
 
[
"
#
e
b
e
d
f
0
"
,
 
"
#
9
b
e
9
a
7
"
,
 
"
#
4
0
c
4
6
3
"
,
 
"
#
3
0
a
1
4
e
"
,
 
"
#
2
1
6
e
3
9
"
]


 
 
 
 
 
 
 
 
)
.
m
a
p
(
(
c
o
l
o
r
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
w
-
[
1
0
p
x
]
 
h
-
[
1
0
p
x
]
 
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
C
o
l
o
r
:
 
c
o
l
o
r
 
}
}


 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
)
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
 
$
{
i
s
D
a
r
k
 
?
 
"
t
e
x
t
-
[
#
8
b
9
4
9
e
]
"
 
:
 
"
t
e
x
t
-
[
#
5
7
6
0
6
a
]
"
}
`
}
>
M
o
r
e
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


 
 
)
;


}
)
;




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
;


