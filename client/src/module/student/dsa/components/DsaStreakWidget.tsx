
i
m
p
o
r
t
 
{
 
F
l
a
m
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
 
q
u
e
r
y
K
e
y
s
 
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
l
i
b
/
q
u
e
r
y
-
k
e
y
s
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
 
D
s
a
S
t
r
e
a
k
 
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
r
e
a
k
C
a
l
e
n
d
a
r
(
{
 
a
c
t
i
v
e
D
a
y
s
 
}
:
 
{
 
a
c
t
i
v
e
D
a
y
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
 
t
o
d
a
y
 
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


 
 
c
o
n
s
t
 
d
a
y
S
t
r
i
n
g
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


 
 
f
o
r
 
(
l
e
t
 
i
 
=
 
6
;
 
i
 
>
=
 
0
;
 
i
-
-
)
 
{


 
 
 
 
c
o
n
s
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
t
o
d
a
y
)
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
 
-
 
i
)
;


 
 
 
 
d
a
y
S
t
r
i
n
g
s
.
p
u
s
h
(
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
l
i
c
e
(
0
,
 
1
0
)
)
;


 
 
}




 
 
c
o
n
s
t
 
a
c
t
i
v
e
S
e
t
 
=
 
n
e
w
 
S
e
t
(
a
c
t
i
v
e
D
a
y
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


 
 
 
 
 
 
{
d
a
y
S
t
r
i
n
g
s
.
m
a
p
(
(
d
a
y
S
t
r
)
 
=
>
 
{


 
 
 
 
 
 
 
 
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
 
a
c
t
i
v
e
S
e
t
.
h
a
s
(
d
a
y
S
t
r
)
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
d
a
y
N
u
m
 
=
 
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
y
S
t
r
 
+
 
"
T
0
0
:
0
0
:
0
0
Z
"
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
"
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
 
}
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


 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
d
a
y
S
t
r
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
0
.
5
"


 
 
 
 
 
 
 
 
 
 
 
 
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
d
a
y
N
u
m
}
 
$
{
d
a
y
S
t
r
}
$
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
 
"
 
—
 
s
o
l
v
e
d
"
 
:
 
"
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
{
`
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
s
m
 
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
 
$
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
 
"
b
g
-
o
r
a
n
g
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
6
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
3
 
h
-
3
"
 
/
>
 
:
 
n
u
l
l
}


 
 
 
 
 
 
 
 
 
 
 
 
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
4
0
0
"
>
{
d
a
y
N
u
m
.
c
h
a
r
A
t
(
0
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
/
d
i
v
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




e
x
p
o
r
t
 
f
u
n
c
t
i
o
n
 
D
s
a
S
t
r
e
a
k
W
i
d
g
e
t
(
)
 
{


 
 
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
 
s
t
r
e
a
k
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
<
D
s
a
S
t
r
e
a
k
>
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
 
q
u
e
r
y
K
e
y
s
.
d
s
a
.
s
t
r
e
a
k
(
)
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
"
/
d
s
a
/
s
t
r
e
a
k
"
)
.
t
h
e
n
(
(
r
)
 
=
>
 
r
.
d
a
t
a
)
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
 
|
|
 
!
s
t
r
e
a
k
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
 
m
i
l
e
s
t
o
n
e
 
=


 
 
 
 
s
t
r
e
a
k
.
c
u
r
r
e
n
t
S
t
r
e
a
k
 
>
=
 
1
0
0
 
?
 
"
1
0
0
-
d
a
y
 
s
t
r
e
a
k
!
"
 
:


 
 
 
 
s
t
r
e
a
k
.
c
u
r
r
e
n
t
S
t
r
e
a
k
 
>
=
 
3
0
 
?
 
"
3
0
-
d
a
y
 
s
t
r
e
a
k
!
"
 
:


 
 
 
 
s
t
r
e
a
k
.
c
u
r
r
e
n
t
S
t
r
e
a
k
 
>
=
 
7
 
?
 
"
7
-
d
a
y
 
s
t
r
e
a
k
!
"
 
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
2
"
>


 
 
 
 
 
 
 
 
 
 
<
F
l
a
m
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
{
`
w
-
5
 
h
-
5
 
$
{
s
t
r
e
a
k
.
c
u
r
r
e
n
t
S
t
r
e
a
k
 
>
 
0
 
?
 
"
t
e
x
t
-
o
r
a
n
g
e
-
5
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
}
`
}
 
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
l
g
 
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
a
b
u
l
a
r
-
n
u
m
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
s
t
r
e
a
k
.
c
u
r
r
e
n
t
S
t
r
e
a
k
}


 
 
 
 
 
 
 
 
 
 
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
d
a
y
 
s
t
r
e
a
k
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
{
m
i
l
e
s
t
o
n
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
 
p
x
-
1
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
s
m
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
m
i
l
e
s
t
o
n
e
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


 
 
 
 
 
 
 
 
 
 
B
e
s
t
:
 
{
s
t
r
e
a
k
.
l
o
n
g
e
s
t
S
t
r
e
a
k
}
d


 
 
 
 
 
 
 
 
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
S
t
r
e
a
k
C
a
l
e
n
d
a
r
 
a
c
t
i
v
e
D
a
y
s
=
{
s
t
r
e
a
k
.
a
c
t
i
v
e
D
a
y
s
}
 
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
t
-
3
 
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


 
 
 
 
 
 
 
 
<
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
{
s
t
r
e
a
k
.
s
o
l
v
e
d
T
o
d
a
y
 
?
 
"
S
o
l
v
e
d
 
t
o
d
a
y
"
 
:
 
"
S
o
l
v
e
 
a
 
p
r
o
b
l
e
m
 
t
o
 
s
t
a
r
t
 
y
o
u
r
 
s
t
r
e
a
k
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


