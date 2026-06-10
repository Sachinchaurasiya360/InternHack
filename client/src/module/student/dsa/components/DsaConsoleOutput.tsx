
i
m
p
o
r
t
 
{
 
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
 
t
y
p
e
 
{
 
D
s
a
E
x
e
c
u
t
i
o
n
R
e
s
u
l
t
 
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


 
 
r
e
s
u
l
t
:
 
D
s
a
E
x
e
c
u
t
i
o
n
R
e
s
u
l
t
 
|
 
n
u
l
l
;


 
 
i
s
R
u
n
n
i
n
g
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
C
o
n
s
o
l
e
O
u
t
p
u
t
(
{
 
r
e
s
u
l
t
,
 
i
s
R
u
n
n
i
n
g
 
}
:
 
P
r
o
p
s
)
 
{


 
 
i
f
 
(
i
s
R
u
n
n
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
"
p
-
6
 
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
 
b
o
r
d
e
r
-
t
-
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
"
>
E
x
e
c
u
t
i
n
g
.
.
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




 
 
i
f
 
(
!
r
e
s
u
l
t
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
p
-
6
 
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
s
m
"
>


 
 
 
 
 
 
 
 
R
u
n
 
y
o
u
r
 
c
o
d
e
 
t
o
 
s
e
e
 
o
u
t
p
u
t


 
 
 
 
 
 
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
 
f
i
r
s
t
R
e
s
u
l
t
 
=
 
r
e
s
u
l
t
.
r
e
s
u
l
t
s
[
0
]
;


 
 
c
o
n
s
t
 
h
a
s
C
o
m
p
i
l
e
E
r
r
o
r
 
=
 
f
i
r
s
t
R
e
s
u
l
t
 
&
&
 
f
i
r
s
t
R
e
s
u
l
t
.
c
o
m
p
i
l
e
O
u
t
p
u
t
 
&
&
 
f
i
r
s
t
R
e
s
u
l
t
.
s
t
a
t
u
s
I
d
 
!
=
=
 
3
 
&
&
 
f
i
r
s
t
R
e
s
u
l
t
.
s
t
a
t
u
s
I
d
 
!
=
=
 
4
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
g
r
a
y
-
9
5
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
2
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
 
t
e
x
t
-
x
s
 
h
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
y
-
a
u
t
o
"
>


 
 
 
 
 
 
{
/
*
 
C
o
m
p
i
l
e
 
e
r
r
o
r
 
*
/
}


 
 
 
 
 
 
{
h
a
s
C
o
m
p
i
l
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
r
e
d
-
9
0
0
/
5
0
 
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
1
.
5
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
r
e
d
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
r
e
d
-
4
0
0
 
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
x
s
"
>
C
o
m
p
i
l
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
f
i
r
s
t
R
e
s
u
l
t
.
c
o
m
p
i
l
e
O
u
t
p
u
t
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




 
 
 
 
 
 
{
/
*
 
P
e
r
-
t
e
s
t
-
c
a
s
e
 
o
u
t
p
u
t
 
*
/
}


 
 
 
 
 
 
{
r
e
s
u
l
t
.
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
t
c
,
 
i
d
x
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
d
x
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
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
t
c
.
l
a
b
e
l
 
|
|
 
`
T
e
s
t
 
C
a
s
e
 
$
{
i
d
x
 
+
 
1
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
{
t
c
.
s
t
a
t
u
s
I
d
 
!
=
=
 
-
1
 
&
&
 
t
c
.
s
t
a
t
u
s
I
d
 
!
=
=
 
3
 
&
&
 
t
c
.
s
t
a
t
u
s
I
d
 
!
=
=
 
4
 
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
m
l
-
2
 
t
e
x
t
-
y
e
l
l
o
w
-
5
0
0
"
>
[
{
t
c
.
s
t
a
t
u
s
D
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
]
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
/
*
 
s
t
d
o
u
t
 
*
/
}


 
 
 
 
 
 
 
 
 
 
{
t
c
.
a
c
t
u
a
l
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
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
{
`
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
 
$
{
t
c
.
p
a
s
s
e
d
 
?
 
"
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
2
0
0
"
}
`
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
c
.
a
c
t
u
a
l
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
r
e
>


 
 
 
 
 
 
 
 
 
 
)
 
:
 
t
c
.
s
t
a
t
u
s
I
d
 
!
=
=
 
-
1
 
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
g
r
a
y
-
6
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
{
"
(
n
o
 
o
u
t
p
u
t
)
"
}
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
g
r
a
y
-
6
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
{
"
(
s
k
i
p
p
e
d
)
"
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
/
*
 
s
t
d
e
r
r
 
*
/
}


 
 
 
 
 
 
 
 
 
 
{
t
c
.
s
t
d
e
r
r
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
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
 
m
t
-
1
"
>
{
t
c
.
s
t
d
e
r
r
}
<
/
p
r
e
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


 
 
)
;


}


